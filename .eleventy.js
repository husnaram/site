module.exports = function (eleventyConfig) {
  // Browsersync config
  eleventyConfig.setBrowserSyncConfig(
    // dist is our output directory
    require('./configs/browsersync.config')('dist')
  );

  // set copy asset folder to dist
  eleventyConfig.addPassthroughCopy('assets');

  // set input and output folder
  return {
    dir: { input: 'src', output: 'dist' },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
