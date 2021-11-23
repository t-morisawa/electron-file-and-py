const fs = require('fs');
const path = require('path');

const isImage = (name) => {
  var format = new RegExp('([^\s]+(\\.(jpg|png|gif))$)', 'i');
  return format.test(name);
}

const get_images_and_dirs = (dir) => {
  fileNames = fs.readdirSync(dir);
  let results = []

  fileNames.forEach(fileName => {
    const fullPath = path.join(dir, fileName)
    const isDir = fs.statSync(fullPath).isDirectory()

    if (!isDir && !isImage(fileName)) return

    const result = {
      "name": fileName,
      "full_path": fullPath,
      "is_dir": isDir
    }
    results.push(result)
  });
  return results
}

module.exports = {
  "get_images_and_dirs": get_images_and_dirs
}
