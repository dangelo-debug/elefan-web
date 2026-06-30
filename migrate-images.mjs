import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const JSON_PATH = process.argv[2] || './projects.json';
const OUTPUT_DIR = process.argv[3] || './public/images/projects';
const LOCAL_PREFIX = '/images/projects/';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(destPath);
    client.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(destPath, () => {});
        reject(new Error(`Status ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

function sanitizeFilename(url) {
  const urlPath = new URL(url).pathname;
  const base = path.basename(urlPath);
  return decodeURIComponent(base).replace(/\s+/g, '-');
}

async function main() {
  const raw = fs.readFileSync(JSON_PATH, 'utf-8');
  const urls = Array.from(new Set(raw.match(/http:\/\/www\.elefan\.cl[^"]*/g) || []));

  console.log(`Encontradas ${urls.length} URLs únicas de WordPress.`);

  const urlToLocal = {};
  let ok = 0;
  let failed = 0;

  for (const url of urls) {
    const filename = sanitizeFilename(url);
    const destPath = path.join(OUTPUT_DIR, filename);
    const localUrl = LOCAL_PREFIX + filename;

    try {
      if (!fs.existsSync(destPath)) {
        await download(url, destPath);
      }
      urlToLocal[url] = localUrl;
      ok++;
      console.log(`✓ ${filename}`);
    } catch (err) {
      failed++;
      console.log(`✗ FALLÓ: ${url} (${err.message})`);
    }
  }

  let newRaw = raw;
  for (const [url, localUrl] of Object.entries(urlToLocal)) {
    const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    newRaw = newRaw.replace(new RegExp(escaped, 'g'), localUrl);
  }

  const backupPath = JSON_PATH + '.backup.json';
  fs.writeFileSync(backupPath, raw, 'utf-8');
  fs.writeFileSync(JSON_PATH, newRaw, 'utf-8');

  console.log(`\nListo. ${ok} descargadas, ${failed} fallidas.`);
  console.log(`Backup guardado en: ${backupPath}`);
  console.log(`JSON actualizado: ${JSON_PATH}`);
}

main().catch((err) => {
  console.error('Error fatal:', err);
  process.exit(1);
});
