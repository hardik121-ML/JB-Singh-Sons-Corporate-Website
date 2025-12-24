const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/Logistics-20251119T135955Z-1-001/Cargo-Logistics');

const carouselImages = [
  'kurt-cotoaga-MP6FMO8khn4-unsplash.jpg',
  'pexels-elevate-1267338.jpg',
  'pexels-tomfisk-3063470.jpg',
  'venti-views-FPKnAO-CF6M-unsplash.jpg',
  'pexels-tomfisk-3057963.jpg',
  'pexels-tomfisk-3075996.jpg',
];

async function optimizeImages() {
  console.log('🖼️  Optimizing carousel images...\n');

  for (const imageName of carouselImages) {
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

      // Optimize image
      await sharp(inputPath)
        .resize(1200, 800, { // Max dimensions for carousel
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

optimizeImages();
