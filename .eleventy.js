module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles/reset.css": "reset.css" });

  eleventyConfig.addWatchTarget("src/styles");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
