const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function extractPixiesetAlbum(url, dayName) {
    console.log(`\n========== EXTRACTING ${dayName.toUpperCase()} ==========`);
    console.log(`URL: ${url}\n`);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled'
        ]
    });

    try {
        const page = await browser.newPage();

        // Set a realistic user agent
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        // Set viewport
        await page.setViewport({ width: 1920, height: 1080 });

        console.log('Navigating to album page...');
        await page.goto(url, {
            waitUntil: 'networkidle2',
            timeout: 60000
        });

        console.log('Waiting for page to fully load...');

        // Wait a bit for any dynamic content or Cloudflare challenge
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Take a screenshot for debugging
        const screenshotPath = path.join(__dirname, `${dayName.toLowerCase().replace(' ', '-')}-screenshot.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`Screenshot saved: ${screenshotPath}`);

        // Get page title to check if we're on the right page
        const title = await page.title();
        console.log(`Page title: ${title}`);

        // Check if we hit Cloudflare challenge
        const bodyText = await page.evaluate(() => document.body.innerText);
        if (bodyText.includes('Just a moment') || bodyText.includes('Cloudflare') || bodyText.includes('Enable JavaScript')) {
            console.log('⚠️  Cloudflare challenge detected. Waiting for it to resolve...');
            await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for challenge to complete

            // Take another screenshot
            await page.screenshot({ path: screenshotPath.replace('.png', '-after-wait.png'), fullPage: true });
        }

        // Extract all image URLs from the page
        console.log('\nExtracting image URLs...');

        const imageData = await page.evaluate(() => {
            // Method 1: Look for img tags with pixieset URLs
            const imgTags = Array.from(document.querySelectorAll('img'));
            const imgUrls = imgTags
                .map(img => img.src || img.dataset.src || img.getAttribute('data-src'))
                .filter(src => src && src.includes('images.pixieset.com'));

            // Method 2: Look in background images
            const allElements = Array.from(document.querySelectorAll('*'));
            const bgUrls = allElements
                .map(el => {
                    const style = window.getComputedStyle(el);
                    const bg = style.backgroundImage;
                    if (bg && bg !== 'none') {
                        const match = bg.match(/url\(["']?(https:\/\/images\.pixieset\.com[^"')]+)["']?\)/);
                        return match ? match[1] : null;
                    }
                    return null;
                })
                .filter(url => url !== null);

            // Method 3: Look in script tags for JSON data
            const scripts = Array.from(document.querySelectorAll('script'));
            let scriptUrls = [];
            scripts.forEach(script => {
                const content = script.textContent || script.innerHTML;
                const matches = content.match(/https:\/\/images\.pixieset\.com\/\d+\/[a-zA-Z0-9]+-large\.jpg/g);
                if (matches) {
                    scriptUrls = scriptUrls.concat(matches);
                }
            });

            // Method 4: Look in the entire HTML for any pixieset image URLs
            const htmlUrls = document.documentElement.innerHTML.match(/https:\/\/images\.pixieset\.com\/\d+\/[a-zA-Z0-9]+-large\.jpg/g) || [];

            // Combine all and remove duplicates
            const allUrls = [...imgUrls, ...bgUrls, ...scriptUrls, ...htmlUrls];
            const uniqueUrls = [...new Set(allUrls)];

            // Try to identify cover/hero image
            let coverImage = null;
            const heroElement = document.querySelector('[class*="hero"], [class*="cover"], [data-cover]');
            if (heroElement) {
                const heroImg = heroElement.querySelector('img');
                if (heroImg) {
                    coverImage = heroImg.src || heroImg.dataset.src;
                }
            }

            // If no hero found, use first image
            if (!coverImage && uniqueUrls.length > 0) {
                coverImage = uniqueUrls[0];
            }

            return {
                imageUrls: uniqueUrls,
                coverImage: coverImage,
                pageHtml: document.documentElement.innerHTML.substring(0, 5000) // First 5000 chars for debugging
            };
        });

        console.log(`\nFound ${imageData.imageUrls.length} unique image URLs`);

        if (imageData.imageUrls.length === 0) {
            console.log('\n⚠️  No images found! Page HTML preview:');
            console.log(imageData.pageHtml.substring(0, 1000));

            // Save full HTML for debugging
            const htmlPath = path.join(__dirname, `${dayName.toLowerCase().replace(' ', '-')}-page.html`);
            const fullHtml = await page.content();
            fs.writeFileSync(htmlPath, fullHtml);
            console.log(`Full HTML saved to: ${htmlPath}`);
        }

        // Prepare result
        const result = {
            day: dayName,
            albumUrl: url,
            coverImage: imageData.coverImage,
            totalPhotos: imageData.imageUrls.length,
            photoUrls: imageData.imageUrls,
            extractedAt: new Date().toISOString()
        };

        console.log(`\n✅ ${dayName} Results:`);
        console.log(`   Cover Image: ${result.coverImage || 'Not found'}`);
        console.log(`   Total Photos: ${result.totalPhotos}`);

        if (result.totalPhotos > 0) {
            console.log(`\n   Photo URLs:`);
            result.photoUrls.forEach((url, index) => {
                console.log(`   ${index + 1}. ${url}`);
            });
        }

        return result;

    } catch (error) {
        console.error(`\n❌ Error extracting ${dayName}:`, error.message);
        return {
            day: dayName,
            error: error.message,
            totalPhotos: 0,
            photoUrls: []
        };
    } finally {
        await browser.close();
    }
}

async function main() {
    const albums = [
        {
            url: 'https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day2/',
            name: 'Day 2'
        },
        {
            url: 'https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day3/',
            name: 'Day 3'
        }
    ];

    const results = [];

    for (const album of albums) {
        const result = await extractPixiesetAlbum(album.url, album.name);
        results.push(result);

        // Save individual result
        const filename = `${album.name.toLowerCase().replace(' ', '-')}-photos.json`;
        const filepath = path.join(__dirname, filename);
        fs.writeFileSync(filepath, JSON.stringify(result, null, 2));
        console.log(`\n💾 Saved to: ${filepath}`);

        // Wait between requests
        if (album !== albums[albums.length - 1]) {
            console.log('\nWaiting 3 seconds before next album...\n');
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }

    // Save combined results
    const combinedPath = path.join(__dirname, 'all-albums-results.json');
    fs.writeFileSync(combinedPath, JSON.stringify(results, null, 2));
    console.log(`\n💾 Combined results saved to: ${combinedPath}`);

    console.log('\n========== EXTRACTION COMPLETE ==========');
    console.log(`Day 2: ${results[0].totalPhotos} photos`);
    console.log(`Day 3: ${results[1].totalPhotos} photos`);
    console.log(`Total: ${results[0].totalPhotos + results[1].totalPhotos} photos`);
}

main().catch(console.error);
