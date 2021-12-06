const { dialog, BrowserWindow } = require('electron')

const selectDirectory = () => {
  const window = BrowserWindow.getAllWindows()[0]
  /**
   * return {
   *   canceled: bool
   *   filePaths: Array<string>
   * }
   */
  let filenames = dialog.showOpenDialog(window, {
      properties: ['openDirectory'],
      title: 'ディレクトリを選択してください',
      defaultPath: '.',
  });
  return filenames
}

module.exports = {
  selectDirectory
}
