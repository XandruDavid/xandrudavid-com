module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles": "." });
  eleventyConfig.addPassthroughCopy({ "src/assets": "." });
  eleventyConfig.addPassthroughCopy({ "src/fonts/hk-grotesk/HKGrotesk-Light.woff2": "HKGrotesk-Light.woff2" });
  eleventyConfig.addPassthroughCopy({ "src/fonts/hk-grotesk/HKGrotesk-Regular.woff2": "HKGrotesk-Regular.woff2" });
  eleventyConfig.addPassthroughCopy({ "src/fonts/hk-grotesk/HKGrotesk-Medium.woff2": "HKGrotesk-Medium.woff2" });
  eleventyConfig.addPassthroughCopy({ "src/fonts/hk-grotesk/HKGrotesk-Bold.woff2": "HKGrotesk-Bold.woff2" });
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  eleventyConfig.addWatchTarget("src/styles");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
