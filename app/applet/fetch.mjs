import https from 'https';

https.get('https://www.beatrice-egli.ch/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const images = Array.from(data.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)).map(m => m[1]);
    const cssMatch = Array.from(data.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)).map(m => m[1]);
    
    console.log("Images:", images);
    console.log("CSS:", cssMatch);
  });
});
