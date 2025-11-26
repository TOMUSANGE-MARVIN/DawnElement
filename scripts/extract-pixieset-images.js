const puppeteer = require('puppeteer');
const fs = require('fs');

const galleries = [
  {
    name: 'Day 1 (Parents)',
    url: 'https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day1/'
  },
  {
    name: 'Day 2',
    url: 'https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day2/'
  },
  {
    name: 'Day 3',
    url: 'https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day3/'
  }
];

async function extractImagesFromGallery(page, gallery) {
  console.log(`\n🔍 Processing: ${gallery.name}`);
  console.log(`📍 URL: ${gallery.url}`);

  try {
    await page.goto(gallery.url, {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // Wait for images to load (longer wait for lazy-loaded galleries)
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Try to scroll down to trigger lazy loading
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Scroll back up
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take a screenshot for debugging
    const screenshotName = gallery.name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    await page.screenshot({
      path: `/Users/echerurodney/projects/stu/rnadw/rwanda-national-association-of-deaf-women/evidence/pixieset-${screenshotName}.png`,
      fullPage: true
    });

    // Extract image URLs using multiple strategies
    const imageUrls = await page.evaluate(() => {
      const urls = new Set();

      // Strategy 1: Find all img tags
      document.querySelectorAll('img').forEach(img => {
        if (img.src && img.src.startsWith('http')) {
          urls.add(img.src);
        }
        if (img.srcset) {
          img.srcset.split(',').forEach(srcItem => {
            const url = srcItem.trim().split(' ')[0];
            if (url.startsWith('http')) {
              urls.add(url);
            }
          });
        }
        // Check data attributes
        Object.keys(img.dataset).forEach(key => {
          const value = img.dataset[key];
          if (typeof value === 'string' && value.startsWith('http') && (value.includes('jpg') || value.includes('png') || value.includes('jpeg'))) {
            urls.add(value);
          }
        });
      });

      // Strategy 2: Find background images in style attributes
      document.querySelectorAll('[style*="background-image"]').forEach(el => {
        const style = el.getAttribute('style');
        const matches = style.match(/url\(['"]?(.*?)['"]?\)/g);
        if (matches) {
          matches.forEach(match => {
            const url = match.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
            if (url.startsWith('http')) {
              urls.add(url);
            }
          });
        }
      });

      // Strategy 3: Check for Pixieset-specific data attributes
      document.querySelectorAll('[data-src], [data-original], [data-full]').forEach(el => {
        ['data-src', 'data-original', 'data-full'].forEach(attr => {
          const url = el.getAttribute(attr);
          if (url && url.startsWith('http')) {
            urls.add(url);
          }
        });
      });

      // Strategy 4: Look for picture/source elements
      document.querySelectorAll('source').forEach(source => {
        if (source.srcset) {
          source.srcset.split(',').forEach(srcItem => {
            const url = srcItem.trim().split(' ')[0];
            if (url.startsWith('http')) {
              urls.add(url);
            }
          });
        }
      });

      // Strategy 5: Check window object for Pixieset data
      if (window.PIXIESET && window.PIXIESET.photos) {
        window.PIXIESET.photos.forEach(photo => {
          if (photo.url) urls.add(photo.url);
          if (photo.full) urls.add(photo.full);
          if (photo.large) urls.add(photo.large);
          if (photo.original) urls.add(photo.original);
        });
      }

      return Array.from(urls);
    });

    // Filter to get high-resolution images (prioritize 'full', 'large', 'original')
    const highResImages = imageUrls.filter(url => {
      const lowerUrl = url.toLowerCase();
      return lowerUrl.includes('pixieset') &&
             (lowerUrl.includes('.jpg') || lowerUrl.includes('.jpeg') || lowerUrl.includes('.png')) &&
             !lowerUrl.includes('thumb') &&
             !lowerUrl.includes('icon') &&
             !lowerUrl.includes('logo');
    });

    console.log(`✅ Found ${highResImages.length} images`);
    return {
      gallery: gallery.name,
      url: gallery.url,
      images: highResImages
    };

  } catch (error) {
    console.error(`❌ Error processing ${gallery.name}:`, error.message);
    return {
      gallery: gallery.name,
      url: gallery.url,
      images: [],
      error: error.message
    };
  }
}

async function main() {
  console.log('🚀 Starting Pixieset Image Extraction...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set user agent to avoid bot detection
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const results = [];

  for (const gallery of galleries) {
    const result = await extractImagesFromGallery(page, gallery);
    results.push(result);
  }

  await browser.close();

  // Generate report
  console.log('\n\n📊 EXTRACTION RESULTS\n' + '='.repeat(80) + '\n');

  let markdownReport = '# Pixieset Gallery Image URLs\n\n';
  markdownReport += `**Extraction Date**: ${new Date().toISOString()}\n\n`;
  markdownReport += '---\n\n';

  results.forEach((result, index) => {
    console.log(`\n## ${result.gallery}`);
    console.log(`Gallery URL: ${result.url}`);
    console.log(`Total Images: ${result.images.length}`);

    markdownReport += `## ${index + 1}. ${result.gallery}\n\n`;
    markdownReport += `**Gallery URL**: ${result.url}\n\n`;
    markdownReport += `**Total Images**: ${result.images.length}\n\n`;

    if (result.error) {
      console.log(`⚠️  Error: ${result.error}`);
      markdownReport += `**Error**: ${result.error}\n\n`;
    }

    if (result.images.length > 0) {
      console.log('\nImage URLs:');
      markdownReport += '**Image URLs**:\n\n';

      result.images.forEach((url, idx) => {
        console.log(`  ${idx + 1}. ${url}`);
        markdownReport += `${idx + 1}. ${url}\n`;
      });
      markdownReport += '\n';
    } else {
      console.log('  No images found');
      markdownReport += '*No images found*\n\n';
    }

    markdownReport += '---\n\n';
  });

  // Save to file
  const outputPath = '/Users/echerurodney/projects/stu/rnadw/rwanda-national-association-of-deaf-women/evidence/pixieset-image-urls.md';
  fs.writeFileSync(outputPath, markdownReport);
  console.log(`\n\n✅ Report saved to: ${outputPath}`);

  // Also save as JSON
  const jsonPath = '/Users/echerurodney/projects/stu/rnadw/rwanda-national-association-of-deaf-women/evidence/pixieset-image-urls.json';
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));
  console.log(`✅ JSON data saved to: ${jsonPath}`);

  // Summary
  const totalImages = results.reduce((sum, r) => sum + r.images.length, 0);
  console.log(`\n\n📈 SUMMARY`);
  console.log(`Total Galleries Processed: ${results.length}`);
  console.log(`Total Images Extracted: ${totalImages}`);
}

main().catch(console.error);
