const path = require('path');
const vueSrc = "./src";

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, vueSrc)
    }
  }
};
