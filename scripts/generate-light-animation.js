const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Light Orbs Animation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      overflow: hidden;
      background: linear-gradient(135deg,
        #f5f7fa 0%,
        #e8f0f8 25%,
        #f0f4f8 50%,
        #e3eaf2 75%,
        #f5f7fa 100%);
    }
    canvas {
      display: block;
      filter: blur(0.5px);
    }
  </style>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas to full viewport
    canvas.width = 1920;
    canvas.height = 1080;

    // Ball class with physics
    class Ball {
      constructor() {
        this.radius = Math.random() * 60 + 40; // 40-100px
        this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;
        this.vx = (Math.random() - 0.5) * 2; // Slow horizontal velocity
        this.vy = (Math.random() - 0.5) * 2; // Slow vertical velocity
        this.opacity = Math.random() * 0.15 + 0.05; // 0.05-0.2 opacity

        // Soft, neutral colors - whites, light blues, soft pastels
        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
          this.color = { r: 255, g: 255, b: 255 }; // White
        } else if (colorChoice < 0.7) {
          this.color = { r: 220, g: 235, b: 255 }; // Light blue
        } else {
          this.color = { r: 240, g: 245, b: 255 }; // Soft blue-white
        }
      }

      update() {
        // Apply subtle friction
        this.vx *= 0.999;
        this.vy *= 0.999;

        // Move ball
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls with damping
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.vx = -this.vx * 0.95;
          this.x = this.x + this.radius > canvas.width
            ? canvas.width - this.radius
            : this.radius;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.vy = -this.vy * 0.95;
          this.y = this.y + this.radius > canvas.height
            ? canvas.height - this.radius
            : this.radius;
        }

        // Subtle random force to keep movement interesting
        if (Math.random() < 0.01) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }
      }

      draw() {
        // Create radial gradient for glass effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );

        gradient.addColorStop(0, \`rgba(\${this.color.r}, \${this.color.g}, \${this.color.b}, \${this.opacity * 1.5})\`);
        gradient.addColorStop(0.4, \`rgba(\${this.color.r}, \${this.color.g}, \${this.color.b}, \${this.opacity})\`);
        gradient.addColorStop(0.7, \`rgba(\${this.color.r}, \${this.color.g}, \${this.color.b}, \${this.opacity * 0.5})\`);
        gradient.addColorStop(1, \`rgba(\${this.color.r}, \${this.color.g}, \${this.color.b}, 0)\`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle white highlight for glass effect
        const highlightGradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          0,
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          this.radius * 0.5
        );

        highlightGradient.addColorStop(0, \`rgba(255, 255, 255, \${this.opacity * 0.8})\`);
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = highlightGradient;
        ctx.beginPath();
        ctx.arc(
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          this.radius * 0.5,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    // Create 12-15 balls for subtle effect
    const balls = [];
    const ballCount = Math.floor(Math.random() * 4) + 12; // 12-15 balls

    for (let i = 0; i < ballCount; i++) {
      balls.push(new Ball());
    }

    // Animation loop
    function animate() {
      // Clear with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(245, 247, 250, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      balls.forEach(ball => {
        ball.update();
        ball.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  </script>
</body>
</html>
`;

async function generateVideo() {
  console.log('🎬 Starting animation video generation...');

  // Create temp HTML file
  const tempHtmlPath = path.join(__dirname, 'temp-animation.html');
  fs.writeFileSync(tempHtmlPath, HTML_CONTENT);

  console.log('🌐 Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('📄 Loading animation page...');
  await page.goto(`file://${tempHtmlPath}`, { waitUntil: 'networkidle0' });

  // Wait for animation to stabilize
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('🎥 Recording animation (20 seconds)...');

  // Start screen recording
  await page.evaluate(() => {
    window.chunks = [];
    window.stream = document.querySelector('canvas').captureStream(30); // 30 FPS
    window.recorder = new MediaRecorder(window.stream, {
      mimeType: 'video/webm;codecs=vp9',
      videoBitsPerSecond: 8000000 // 8 Mbps
    });

    window.recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        window.chunks.push(e.data);
      }
    };

    window.recorder.start();
  });

  // Record for 20 seconds
  await new Promise(resolve => setTimeout(resolve, 20000));

  console.log('⏹️  Stopping recording...');

  const videoBuffer = await page.evaluate(async () => {
    return new Promise((resolve) => {
      window.recorder.onstop = async () => {
        const blob = new Blob(window.chunks, { type: 'video/webm' });
        const arrayBuffer = await blob.arrayBuffer();
        const buffer = Array.from(new Uint8Array(arrayBuffer));
        resolve(buffer);
      };
      window.recorder.stop();
    });
  });

  // Save WebM file
  const webmPath = path.join(__dirname, '..', 'public', 'videos', 'light-orbs-animation.webm');
  fs.writeFileSync(webmPath, Buffer.from(videoBuffer));

  console.log(`✅ WebM video saved: ${webmPath}`);

  await browser.close();

  // Clean up temp HTML
  fs.unlinkSync(tempHtmlPath);

  console.log('🎉 Video generation complete!');
  console.log('📦 Next step: Compress with FFmpeg using:');
  console.log(`   ffmpeg -i ${webmPath} -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -movflags +faststart public/videos/light-orbs-animation.mp4`);
}

generateVideo().catch(console.error);
