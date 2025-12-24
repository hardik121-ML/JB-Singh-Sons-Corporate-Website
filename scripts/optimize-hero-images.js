const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/Logistics-20251119T135955Z-1-001/Cargo-Logistics');

// Hero images that need optimization (priority images > 500KB)
const heroImages = [
  'chris-pagan-sfjS-FglvU4-unsplash.jpg',      // Freight Forwarding - 2.7MB
  'rinson-chory-2vPGGOU-wLA-unsplash.jpg',     // Marine Logistics - 2.7MB
];

async function optimizeHeroImages() {
  console.log('🖼️  Optimizing service hero images...\n');

  for (const imageName of heroImages) {
    const inputPath = path.join(imagesDir, imageName);
    const outputPath = path.join(imagesDir, imageName);
    const backupPath = path.join(imagesDir, `${imageName}.backup`);

    try {
      // Check if image exists
      if (!fs.existsSync(inputPath)) {
        console.log(`❌ ${imageName} - Not found`);
        continue;
      }

      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);

      // Create backup if not exists
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(inputPath, backupPath);
      }

      // Optimize image - hero images need to be larger (full screen)
      await sharp(inputPath)
        .resize(1920, 1080, { // Full HD for hero backgrounds
          fit: 'cover',
          position: 'center',
        })
        .jpeg({
          quality: 85,
          progressive: true,
          mozjpeg: true,
        })
        .toFile(outputPath + '.tmp');

      // Replace original with optimized
      fs.renameSync(outputPath + '.tmp', outputPath);

      // Get new file size
      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024 / 1024).toFixed(2);
      const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`✅ ${imageName}`);
      console.log(`   ${originalSize}MB → ${newSize}MB (${savings}% smaller)\n`);

    } catch (error) {
      console.log(`❌ ${imageName} - Error: ${error.message}\n`);
    }
  }

  console.log('✨ Optimization complete!');
  console.log('💡 Original images backed up with .backup extension');
}

optimizeHeroImages();
