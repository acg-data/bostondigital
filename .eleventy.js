module.exports = function(eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("public");

  // Watch targets
  eleventyConfig.addWatchTarget("css/");
  eleventyConfig.addWatchTarget("js/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "../_includes",
      layouts: "../_layouts",
      data: "../_data"
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
