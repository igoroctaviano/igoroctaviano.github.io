/**
 * Renders public/og.png (1200x630), the default social share image.
 * Run with `node scripts/og.mjs` after changing the portrait or the copy.
 */
import sharp from "sharp";

const W = 1200;
const H = 630;
const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="#fbfbfa"/>
  <text x="90" y="290" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="68" fill="#18181b">Igor Octaviano</text>
  <text x="92" y="350" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#71717a">Software engineer and medical imaging consultant</text>
  <text x="92" y="520" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#a1a1aa">igoroctaviano.com</text>
</svg>`);

const portrait = await sharp("src/assets/profile.png").resize({ height: 560 }).toBuffer();

await sharp(bg)
  .composite([{ input: portrait, top: 35, left: 800 }])
  .png({ compressionLevel: 9, palette: true })
  .toFile("public/og.png");

console.log("wrote public/og.png");
