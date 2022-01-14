const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://husnaram.site';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
  assets: 'assets',
  input: 'src',
  output: 'dist'
};

const dir = {
  img: `/${folder.assets}/img/`,
  favicons: `/${folder.assets}/img/favicons/`,
}

module.exports = {
  siteName: 'Husna Ramadan',
  author: 'Husna',
  role: 'Backend Developer',
  slogan: 'Writer of API web based with Node.js, Nest.js, or Adonis <br />on linux environment and not a fast learner.',
  environment,
  isProd,
  folder,
  base: {
    site: baseUrl,
    img: `${baseUrl}${dir.img}`,
    favicons: `${baseUrl}${dir.favicons}`,
  },
  tracking: {
    gtag: 'your_tracking_id'
  }
};
