const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'assets', 'images', 'instagram');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const urls = [
  {
    name: 'post1.jpg',
    url: 'https://instagram.fbom57-1.fna.fbcdn.net/v/t51.82787-15/704608733_18051220034775142_2427527805408762315_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQwLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=instagram.fbom57-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2gEeIS4YSPv6VITZsDM_51L3P5XChXhAdQtYEz3mP7k-tyUjGEv0AAp3SCoZInSQiTg&_nc_ohc=E-eb8bu_8pAQ7kNvwHn1nLF&_nc_gid=qjg9J4ebw2qhvYqNgNupAg&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af5AP4AWZQoNvIy3CM7xnOO4GNEqFwMlnBelYgXgeUEgYQ&oe=6A130E0E&_nc_sid=10d13b'
  },
  {
    name: 'post2.jpg',
    url: 'https://instagram.fbom57-1.fna.fbcdn.net/v/t51.82787-15/703069867_18051054122775142_7638781651410221870_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0LnNkci5yZWd1bGFyX3Bob3RvLmV4cGVyaW1lbnRhbCJ9&_nc_ht=instagram.fbom57-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2gGu-W4MLl14BmotT_uS9-eXNyjA33TgXQrTahM4ZPUo79Ml-PPTwlF_PVU_GbjDYCI&_nc_ohc=g_KsXq3FWHgQ7kNvwFLVCgg&_nc_gid=3nqMYSowUD_h_i2rOupxgg&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af79OqtHHVeDa2-RbJbiUUB5x5wnujVZF-ZPrIZwZkQmlw&oe=6A130849&_nc_sid=10d13b'
  },
  {
    name: 'post3.jpg',
    url: 'https://instagram.fbom50-1.fna.fbcdn.net/v/t51.82787-15/701221362_18050918195775142_579053889518345362_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgwLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=instagram.fbom50-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2gGMMTYrXL_bYgiNCLiAUWRncqIwaM-sPA4KS_NCEfgQ0YR86nE2Q3XtVwczXuoEoCg&_nc_ohc=ZpEIKrM9QkQQ7kNvwGx98dn&_nc_gid=26qopV-twaCKZOSrgG3WYw&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af6U51M31oAyg5JYRElbzT5pJBcpTIaLXn8Ead3pRJHupA&oe=6A1308E7&_nc_sid=10d13b'
  },
  {
    name: 'post4.jpg',
    url: 'https://instagram.fbom50-1.fna.fbcdn.net/v/t51.82787-15/700419298_18050745260775142_4090662947801742792_n.jpg?stp=dst-jpg_e35_p1080x1080_sh2.08_tt6&_nc_ht=instagram.fbom50-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2gEYe4E9W5oTUuMwDNczNaBaf-ZogF1AcvAFT8AjLFb0Eruj13fDy7b0B-4l5IoWb6c&_nc_ohc=u3pSP-yIV5gQ7kNvwFSSYCx&_nc_gid=JMXKiyjDo6Tj9OgRy_qa_g&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af7CLLnsMLQ73JwrQYGT3LU_bsrkJ-DGl-ZanjeVqGg3VA&oe=6A133376&_nc_sid=10d13b'
  },
  {
    name: 'post5.jpg',
    url: 'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/698494394_18050589605775142_2444104602088854161_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgwLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2gF1YbbJsiU80H6Btt7b9icjsVdhlIIQPTJ8wCY2m5gytzy-poEGKFH3_gzjD6WCgI8&_nc_ohc=QSH-F-AOtCwQ7kNvwFpeyWe&_nc_gid=hO3jJXYgaEap0WhsF-nDTw&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af6CGhyoUSJcZVHPOimlle9GHfx5C78LpOuXdqIDyLyEiQ&oe=6A132B1C&_nc_sid=10d13b'
  },
  {
    name: 'post6.jpg',
    url: 'https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/698557969_18050277356775142_8135392553402462294_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgwLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=scontent-bom5-1.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2ggF1YbbJsiU80H6Btt7b9icjsVdhlIIQPTJ8wCY2m5gytzy-poEGKFH3_gzjD6WCgI8&_nc_ohc=x4pP8j3us_UQ7kNvwF9vqPF&_nc_gid=jP9L2FRA9r74cAfDf4ceug&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af6_RARInUCuRPsXvl8VjRtXFN784tZIRnhMpYwamOuYTg&oe=6A1331E9&_nc_sid=10d13b'
  },
  {
    name: 'post7.jpg',
    url: 'https://instagram.fbom57-1.fna.fbcdn.net/v/t51.82787-15/684218941_18048907826775142_6331499410519112276_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgwLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=instagram.fbom57-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2gFVGfP4zW6lC-RFRsvD3yd0CLw3msZM3VRj9XFFPV3hVxTxi3_v701HZV13N4wIBug&_nc_ohc=HXs9laC79_EQ7kNvwHjbrJW&_nc_gid=c_lqAj58EGA5K0DuzKZshg&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af4JO1ueXkoFIZATiCCBs_0u1DyJ_Abx4Nijip9KWeOX9A&oe=6A133F28&_nc_sid=10d13b'
  }
];

let completed = 0;

urls.forEach(item => {
  const filePath = path.join(dir, item.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(item.url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://www.instagram.com/'
    }
  }, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${item.name}: Status code ${response.statusCode}`);
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${item.name} successfully to ${filePath}`);
      completed++;
      if (completed === urls.length) {
        console.log('ALL DOWNLOADS COMPLETE!');
        process.exit(0);
      }
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${item.name}: ${err.message}`);
  });
});
