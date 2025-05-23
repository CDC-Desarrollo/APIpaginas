const path = require('path');

const PUBLIC_DIR = path.join(__dirname,'..', 'public');

console.log(PUBLIC_DIR);

const UPLOAD_BASE = {
  controldecarga: {
    images: path.join(PUBLIC_DIR, 'controldecarga','images')
  },
  rapicarga: {
    images: path.join(PUBLIC_DIR, 'rapicarga')
  },
};

const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png'];
const DEFAULT_UPLOAD_FOLDER = 'default';

module.exports = {
  UPLOAD_BASE,
  SUPPORTED_IMAGE_TYPES,
  DEFAULT_UPLOAD_FOLDER,
    // MAX_IMAGE_SIZE: 5 * 1024 * 1024,
};