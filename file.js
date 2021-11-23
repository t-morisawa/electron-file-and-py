const fs = require('fs');
const path = require('path');

const get_images_and_dirs = (dir) => {
  fileNames = fs.readdirSync(dir);
  let results = []

  fileNames.forEach(fileName => {
    const fullPath = path.join(dir, fileName)
    const stats = fs.statSync(fullPath)
    const result = {
      "name": fileName,
      "full_path": fullPath,
      "is_dir": stats.isDirectory()
    }
    results.push(result)
  });
  return results
}

module.exports = {
  "get_images_and_dirs": get_images_and_dirs
}
