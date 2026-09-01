const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const worksDir = path.join(__dirname, '..', 'public', 'works');
const publicDir = path.join(__dirname, '..', 'public');

async function optimizeImages() {
  const files = fs.readdirSync(worksDir);
  const metadataMap = {};

  console.log('Optimizing works images...');
  for (const file of files) {
    const filePath = path.join(worksDir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    const inputBuffer = fs.readFileSync(filePath);
    const originalMeta = await sharp(inputBuffer).metadata();
    const isLogo = file.toLowerCase().includes('logo') || file === 'livinn.webp' || file === 'forkin.webp' || file === 'padipy.webp' || file === 'EKMH.webp' || file === 'Lumier.webp' || file === 'ely8fx.jpg';
    const maxDim = isLogo ? 1200 : 1600;

    let pipeline = sharp(inputBuffer)
      .resize({
        width: maxDim,
        height: maxDim,
        fit: 'inside',
        withoutEnlargement: true,
      });

    let outputBuffer;
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      outputBuffer = await pipeline.jpeg({ quality: 85, progressive: true }).toBuffer();
    } else {
      outputBuffer = await pipeline.webp({ quality: 85, effort: 6 }).toBuffer();
    }

    fs.writeFileSync(filePath, outputBuffer);

    const newMeta = await sharp(outputBuffer).metadata();
    metadataMap[file] = {
      width: newMeta.width,
      height: newMeta.height,
      origSizeKB: (stat.size / 1024).toFixed(1),
      newSizeKB: (outputBuffer.length / 1024).toFixed(1),
      origDimensions: `${originalMeta.width}x${originalMeta.height}`,
      newDimensions: `${newMeta.width}x${newMeta.height}`,
    };

    console.log(
      `✓ ${file.padEnd(20)} ${metadataMap[file].origDimensions.padEnd(14)} -> ${metadataMap[file].newDimensions.padEnd(12)} (${metadataMap[file].origSizeKB} KB -> ${metadataMap[file].newSizeKB} KB)`
    );
  }

  // Also optimize logo.png
  const logoPath = path.join(publicDir, 'logo.png');
  if (fs.existsSync(logoPath)) {
    const logoStat = fs.statSync(logoPath);
    const logoInBuf = fs.readFileSync(logoPath);
    const logoBuffer = await sharp(logoInBuf)
      .resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 90 })
      .toBuffer();
    fs.writeFileSync(logoPath, logoBuffer);
    console.log(`✓ logo.png (${(logoStat.size / 1024).toFixed(1)} KB -> ${(logoBuffer.length / 1024).toFixed(1)} KB)`);
  }

  console.log('\n--- FINAL METADATA JSON ---');
  console.log(JSON.stringify(metadataMap, null, 2));
}

optimizeImages().catch(console.error);
