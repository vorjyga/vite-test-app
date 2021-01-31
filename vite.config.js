import vue from '@vitejs/plugin-vue'
const path = require('path');
const vueSrc = "./src";
/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  alias: {
    '@': path.resolve(__dirname, vueSrc)
  }
}
