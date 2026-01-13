# Media Conversion TODO

## Problem
- Videos and images loading slowly on Vercel production (fast on local dev)
- Need to optimize file sizes for faster loading

## Videos to Convert to WebM (3 files)

### Files:
1. `./public/videos/hero-video.mp4` ⚠️ **PRIORITY** (currently 11.5 MB)
2. `./public/videos/trusted-section-video.mp4`
3. `./public/videos/3309765-uhd_3840_2160_30fps.mp4`

**Skip:** `light-orbs-animation.mp4` (WebM already exists)

### Conversion Settings (CloudConvert.com)

**Select:** MP4 to WebM

**Settings to change:**
- **Constant Quality (CRF): 35-38** (higher = smaller file)
- **Audio Bitrate: 64 kbps** (instead of 96)

**Keep default:**
- Video Codec: vp9 ✓
- Audio Codec: opus ✓
- Resolution: no change ✓
- Aspect Ratio: no change ✓
- Fit: scale ✓

### Important Notes:
- **Target size:** 2-4 MB for hero video (currently getting 21.5 MB - WRONG!)
- **If CloudConvert fails:** Try FreeConvert.com with "Compress Video" option
- **Keep original MP4 files** - needed as fallback for Safari compatibility
- **Expected result:** WebM should be 50-70% smaller than MP4

---

## Images to Convert to WebP (19 files)

### Placeholders folder (3 images):
1. `./public/images/placeholders/Image 1 WarehouseOffice.png`
2. `./public/images/placeholders/Image 3 Wide Equipment Cargo.png`
3. `./public/images/placeholders/Supply Chain Optimization.jpeg`

### Cargo-Logistics folder (16 images):
4. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/chris-pagan-sfjS-FglvU4-unsplash.jpg`
5. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/shaah-shahidh--subrrYxv8A-unsplash.jpg`
6. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-elevate-1267338.jpg`
7. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/chuttersnap-5Rlrs3sKVJU-unsplash.jpg`
8. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/venti-views-FPKnAO-CF6M-unsplash.jpg`
9. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/kurt-cotoaga-MP6FMO8khn4-unsplash.jpg`
10. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3057963.jpg`
11. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-ketut-subiyanto-4246120.jpg`
12. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-markusspiske-172074.jpg`
13. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/patrick-campanale-oCsQLKENz34-unsplash.jpg`
14. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3063470.jpg`
15. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/david-preston-OIf5dPuecMg-unsplash.jpg`
16. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/william-william-NndKt2kF1L4-unsplash (1).jpg`
17. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/william-william-NndKt2kF1L4-unsplash.jpg`
18. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/rinson-chory-2vPGGOU-wLA-unsplash.jpg`
19. `./public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3075996.jpg`

### Conversion Steps (Squoosh.app)

1. Go to **squoosh.app**
2. Drag & drop one image
3. Select **WebP** format on right side
4. Set **Quality: 80-85%**
5. Click **Download**
6. Repeat for all 19 images

### Important Notes:
- Keep original JPG/PNG files as backup
- Next.js auto-converts to WebP, but converting source reduces storage
- Target: Under 500KB per image

---

## After Conversion

### Update Video Tags in Code:
Add WebM source with MP4 fallback:
```tsx
<video>
  <source src="/videos/hero-video.webm" type="video/webm" />
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
```

### Update Image Paths:
Replace `.jpg/.png` extensions with `.webp` in code where images are used.

---

## Expected Results
- **Hero video:** 11.5 MB → 2-4 MB (75% smaller)
- **Other videos:** 50-70% size reduction
- **Images:** 30-50% size reduction
- **Page load:** Much faster on Vercel production
- **No compatibility issues:** Fallbacks ensure 100% browser support
