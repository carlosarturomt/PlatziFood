"use strict";

var purgecss = require('@fullhuman/postcss-purgecss'); // de esta manera no se rompen los breakpoints


module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer"), purgecss({
    content: ["./**/*.html"],
    defaultExtractor: function defaultExtractor(content) {
      return content.match(/[\w-/:]+(?<!:)/g) || [];
    }
  }), require("cssnano")({
    preset: "default"
  })]
};