const path = require('path');
const htmlmin = require('html-minifier');
const CleanCSS = require('clean-css');
const { minify } = require('terser');
const Image = require('@11ty/eleventy-img');

const env = require('./src/_data/env');

function imageShortcode(
  src,
  alt,
  sizes = '(min-width: 30em) 50vw, 100vw',
  widths = [500, 600]
) {
  let options = {
    widths: widths,
    formats: ['webp', 'jpeg'],
    urlPath: '/assets/img',
    outputDir: './dist/assets/img',
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}.${format}`;
    },
  };

  Image(src, options);

  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  };

  let metadata = Image.statsSync(src, options);
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  // set browser sync config to support .html clean url routing
  eleventyConfig.setBrowserSyncConfig(
    require('./configs/browsersync.config')(env.folder.output)
  );

  // set copy asset folder to dist
  eleventyConfig.addPassthroughCopy(env.folder.assets);
  eleventyConfig.addPassthroughCopy(`${env.folder.input}/favicon.ico`);

  // set up HTML minifier
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // set up iniline minified css
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // set up inline javascript minified
  eleventyConfig.addNunjucksAsyncFilter(
    'jsmin',
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error('Terser error: ', err);
        // Fail gracefully.
        callback(null, code);
      }
    }
  );

  eleventyConfig.addShortcode('image', imageShortcode);
  
  // add plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'));
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // set input and output folder
  return {
    dir: { input: env.folder.input, output: env.folder.output },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
