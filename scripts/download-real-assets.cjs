const https = require('https');
const fs = require('fs');
const path = require('path');

const albums = [
  { name: 'album_gluck.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/9b/d2/16/9bd21687-7a11-5eca-3270-4829775680f7/00602537398232.rgb.jpg/600x600bb.jpg' },
  { name: 'album_wohlfuhl.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/28/df/ff/28dfff6f-ae2d-0bc4-91b0-8ca50318ac9f/00602567107286.rgb.jpg/600x600bb.jpg' },
  { name: 'album_bis_hierher.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/05/bd/5a/05bd5ade-f150-4b5f-ac2a-9ba09e3c54c5/00602547442093.rgb.jpg/600x600bb.jpg' },
  { name: 'album_alles.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/35/6c/44356c79-0c41-4faa-550d-461b29446fc4/21UMGMR42106.rgb.jpg/600x600bb.jpg' },
  { name: 'album_balance.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f7/81/47/f781478c-f070-0400-96e6-fa41be1ae732/196589894526.jpg/600x600bb.jpg' },
  { name: 'album_kick.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/27/3d/17/273d17e8-6a7a-6738-0569-9456ec3e579c/00602557199468.rgb.jpg/600x600bb.jpg' },
  { name: 'album_hor_nie_auf.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c7/e5/ef/c7e5ef3f-a4ce-3371-10b2-8486ddd0ca87/196873046310.jpg/600x600bb.jpg' },
  { name: 'album_bunt.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/f1/83/f6f18384-d0be-a0f2-6a58-9d1949d27116/20UMGIM56395.rgb.jpg/600x600bb.jpg' },
  { name: 'album_feuer.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Features6/v4/66/1d/7f/661d7fce-3a7a-5796-f7a9-72a19e6198a9/dj.ztjcgfuw.jpg/600x600bb.jpg' },
  { name: 'album_naturlich.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/7e/a7/84/7ea784e8-3245-54fa-96a4-41c09a444041/00602577541698.rgb.jpg/600x600bb.jpg' },
  { name: 'album_mini_schwiiz.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/97/13/69/9713694e-24d5-5a4a-9a4d-ebd1b666c852/20UMGIM55427.rgb.jpg/600x600bb.jpg' },
  // Missing ones use proxies or other Egli pics
  { name: 'album_sag_mir.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music69/v4/57/82/bf/5782bf21-8aa3-97f8-b1d0-c311cadc3cf2/8433391278475.jpg/600x600bb.jpg' },
  { name: 'album_himmel.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/46/38/f5/4638f584-974d-97d8-4aae-aa1af78c4657/00602557382150.rgb.jpg/600x600bb.jpg' },
  { name: 'album_pure.jpg', url: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/12/be/d4/12bed42d-d3ed-1ad4-1a22-992878c5ed2a/00602567062912.rgb.jpg/600x600bb.jpg' }
];

const TARGET_DIR = path.join(__dirname, '../public/assets');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };
    https.get(url, options, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  console.log('Starting album covers download...');
  for (const album of albums) {
    const dest = path.join(TARGET_DIR, album.name);
    try {
      console.log(`Downloading ${album.name}...`);
      await download(album.url, dest);
      console.log(`Finished ${album.name}`);
    } catch (err) {
      console.error(`Error downloading ${album.name}:`, err.message);
    }
  }
  console.log('All downloads complete.');
}

run();
