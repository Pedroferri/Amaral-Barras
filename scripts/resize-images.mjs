import sharp from 'sharp';
import { readdir, rename } from 'fs/promises';
import path from 'path';

const dir = './public/imagens';
const files = await readdir(dir);

for (const file of files) {
  const input = path.join(dir, file);
  const tmp = input + '.tmp';
  const meta = await sharp(input).metadata();

  const hasAlpha = meta.channels === 4;

  const pipeline = sharp(input).resize(1200, 1200, { fit: 'inside', withoutEnlargement: true });

  if (hasAlpha) {
    await pipeline.png({ compressionLevel: 9 }).toFile(tmp);
  } else {
    await pipeline.jpeg({ quality: 85, mozjpeg: true }).toFile(tmp);
  }

  await rename(tmp, input);
  const newMeta = await sharp(input).metadata();
  const newSize = (await import('fs')).statSync(input).size;
  console.log(`${file}: ${meta.width}x${meta.height} → ${newMeta.width}x${newMeta.height} (${Math.round(newSize/1024)}KB, ${newMeta.format})`);
}
console.log('Done.');
