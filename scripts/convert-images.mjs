import sharp from '../node_modules/sharp/lib/index.js';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMGS_DIR = new URL('../public/assets/imgs', import.meta.url).pathname;
const LOGOS_DIR = new URL('../public/assets/logos', import.meta.url).pathname;

const WEBP_QUALITY = 82;
const AVIF_QUALITY = 68;

async function convertFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  const base = filePath.slice(0, -ext.length);
  const name = basename(filePath);

  const webpPath = base + '.webp';
  const avifPath = base + '.avif';

  const img = sharp(filePath);

  const [webpInfo, avifInfo] = await Promise.all([
    img.clone().webp({ quality: WEBP_QUALITY }).toFile(webpPath),
    img.clone().heif({ compression: 'av1', quality: AVIF_QUALITY }).toFile(avifPath),
  ]);

  return { name, webpSize: webpInfo.size, avifSize: avifInfo.size };
}

async function processDir(dir) {
  const files = await readdir(dir);
  const results = await Promise.all(
    files.map(async f => {
      try {
        return await convertFile(join(dir, f));
      } catch (e) {
        console.error(`SKIP ${f}: ${e.message}`);
        return null;
      }
    })
  );
  return results.filter(Boolean);
}

const [imgs, logos] = await Promise.all([
  processDir(IMGS_DIR),
  processDir(LOGOS_DIR),
]);

const all = [...imgs, ...logos];
const totalWebp = all.reduce((s, r) => s + r.webpSize, 0);
const totalAvif = all.reduce((s, r) => s + r.avifSize, 0);

for (const r of all) {
  const webpKB = (r.webpSize / 1024).toFixed(0);
  const avifKB = (r.avifSize / 1024).toFixed(0);
  console.log(`  ${r.name.padEnd(44)} webp: ${webpKB.padStart(5)}KB  avif: ${avifKB.padStart(5)}KB`);
}
console.log(`\n${all.length} images converted`);
console.log(`Total webp: ${(totalWebp / 1024 / 1024).toFixed(1)}MB  avif: ${(totalAvif / 1024 / 1024).toFixed(1)}MB`);
