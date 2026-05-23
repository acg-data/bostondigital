module.exports = function(eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Watch targets
  eleventyConfig.addWatchTarget("css/");
  eleventyConfig.addWatchTarget("js/");

  // Filters
  eleventyConfig.addFilter("split", (str, sep) => {
    if (typeof str !== "string") return [];
    return str.split(sep);
  });

  eleventyConfig.addFilter("breadcrumbs", (url) => {
    if (!url || url === "/") return [];
    const parts = url.split("/").filter(Boolean);
    let path = "";
    return parts.map((part, i) => {
      path += "/" + part;
      return {
        position: i + 2,
        name: part.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
        url: path + "/"
      };
    });
  });

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
