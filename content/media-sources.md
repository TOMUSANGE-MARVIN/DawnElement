# RNADW Media Sources Reference

**Last Updated:** 2025-11-26
**Purpose:** Central reference for all RNADW media assets (photos, videos, documents)

---

## 📸 Photo Albums

### International Week of Deaf People 2025

**Platform:** Pixieset (Emmanuel Irumva)
**Event:** International Week of Deaf People 2025
**Total Days:** 3 days

#### Day 1 - Parents Day
- **URL:** https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day1/
- **Photos:** 33 high-resolution images
- **Status:** ✅ Extracted and integrated into website
- **Usage:** Gallery page, Blogs page (featured posts)
- **Image URLs File:** `/evidence/pixieset-image-urls.md`

#### Day 2 - Community Celebration
- **URL:** https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day2/
- **Photos:** TBD
- **Status:** ⏸️ Access restricted (Cloudflare CAPTCHA) - Manual extraction needed
- **Usage:** Not yet integrated

#### Day 3 - Final Celebration
- **URL:** https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day3/
- **Photos:** TBD
- **Status:** ⏸️ Access restricted (Cloudflare CAPTCHA) - Manual extraction needed
- **Usage:** Not yet integrated

---

## 🎥 Videos

### YouTube Channel

**Platform:** YouTube
**Channel Name:** RNADW (Rwanda National Association of Deaf Women)
**Channel URL:** https://www.youtube.com/@rwandanationalassociationo8664
**Total Videos on Channel:** 56 videos
**Total Views:** 6,145+ views

#### Video Categories:
1. **SGBV/VAWG** (16 videos)
   - Gender-based violence prevention
   - Youth awareness
   - Support for survivors
   - Cultural variations
   - Violence against deaf people

2. **CEDAW** (4 videos)
   - Non-discrimination principles
   - Rwanda Sign Language explanations
   - Substantive equality
   - State obligation principles

3. **SRHR/CSE** (11 videos)
   - Comprehensive sexual education
   - Youth behavior and relationships
   - Reproductive health services
   - Conversation series (Ikiganiro)

4. **HIV/AIDS** (3 videos)
   - Prevention and awareness
   - Community education

5. **Menstrual Health** (5 videos)
   - Ukwezi k'Umugore series
   - Cultural practices and education

6. **Impact Stories** (17 videos)
   - #MyNameMyIdentity campaign
   - Community testimonials
   - About RNADW
   - Equal rights advocacy

**Website Integration:**
- Videos page: `/src/app/videos/page.tsx`
- Embedded via YouTube iframe
- Category filtering available
- Mobile-responsive player

---

## 📄 Documents & Resources

### Strategic Plan
- **File:** `/content/strategic-plan-2025-2030.md`
- **Period:** 2025-2030
- **Theme:** "Loud in Silence: Deaf Women and Girls Driving Change"
- **Tagline:** Participation ~ Power ~ Partnership!

### Evidence & Extraction Scripts
- **Pixieset Images (MD):** `/evidence/pixieset-image-urls.md`
- **Pixieset Images (JSON):** `/evidence/pixieset-image-urls.json`
- **Extraction Script:** `/scripts/extract-pixieset-images.js`
- **Gallery Screenshots:** `/evidence/pixieset-day-*.png`

---

## 🌐 Social Media & Online Presence

### Official Channels
- **Website:** https://rnadw.org.rw/
- **Twitter/X:** @RwandaDeafwomen
- **YouTube:** https://www.youtube.com/@rwandanationalassociationo8664 (56 videos)
- **Facebook:** TBD
- **Instagram:** TBD
- **LinkedIn:** TBD

---

## 📋 Usage Guidelines

### For Website Updates

**When adding new photos:**
1. Check Pixieset albums first (Day 1, 2, 3)
2. Extract image URLs using `/scripts/extract-pixieset-images.js`
3. Update relevant page(s):
   - Gallery: `/src/app/gallery/page.tsx`
   - Blogs: `/src/app/blogs/page.tsx`
   - Home: `/src/app/page.tsx` (if needed)
4. Add image URLs to `/evidence/pixieset-image-urls.md`

**When adding new videos:**
1. Upload to RNADW YouTube channel
2. Get video ID from URL (youtube.com/watch?v=**VIDEO_ID**)
3. Update `/src/app/videos/page.tsx`
4. Add to appropriate category (SGBV, CEDAW, SRHR, Stories)

### Image Formats Used
- **Pixieset URLs:** `https://images.pixieset.com/[gallery-id]/[hash]-large.jpg`
- **Resolution:** Large (suitable for web use)
- **Format:** JPG
- **Optimization:** Handled by Next.js Image component where possible

---

## 🔄 Future Media Sources

### Upcoming Events
- Document new event albums here as they become available
- Include dates, photographer, platform, and access info

### Partner Content
- List any media shared by partners (RIB, UNHCR, etc.)
- Include permission/usage rights information

---

## 📞 Contact for Media

**For media inquiries or access:**
- **Email:** info@rnadw.org.rw
- **Phone:** +250 784 591 495
- **Address:** KG 125 ST, 304, IKARO PLAZA, Kigali - Rwanda

**For Pixieset access:**
- **Photographer:** Emmanuel Irumva
- **Platform:** pixieset.com

---

## ⚠️ Important Notes

1. **Copyright:** All photos and videos are property of RNADW. Obtain permission before external use.
2. **Privacy:** Respect privacy of individuals in photos/videos. Some content may require consent for public sharing.
3. **Accessibility:** Ensure all video content has captions/sign language interpretation where possible.
4. **Backup:** Maintain local backups of critical media assets.
5. **Version Control:** Document major media updates in git commits with descriptive messages.

---

## 📊 Media Statistics

- **Total Photo Albums:** 3 (International Week 2025)
- **Photos Extracted:** 33 (Day 1 only)
- **Total Videos:** 56 (on YouTube)
- **Videos on Website:** 56 (all videos integrated)
- **Video Categories:** 6 (SGBV/VAWG, CEDAW, SRHR/CSE, HIV/AIDS, Menstrual Health, Impact Stories)
- **Total YouTube Views:** 6,145+

---

*This document serves as the single source of truth for all RNADW media assets. Update it whenever new media is added or sources change.*
