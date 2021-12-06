const { dialog, BrowserWindow } = require('electron')

const selectDirectory = async () => {
  const window = BrowserWindow.getAllWindows()[0]
  const filenames = await dialog.showOpenDialog(window, {
      properties: ['openDirectory'],
      title: 'ディレクトリを選択してください',
      defaultPath: '.',
  });
  const path = filenames.canceled ? null : filenames.filePaths[0];
  return path
}

module.exports = {
  selectDirectory
}
