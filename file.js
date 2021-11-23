const fs = require('fs');

const get_images_and_dirs = (path) => {
  return fs.readdirSync(path);
}

module.exports = {
  "get_images_and_dirs": get_images_and_dirs
}
