// preload.js
const { ipcRenderer, contextBridge } = require('electron');

// Node.js の全 API は、プリロードプロセスで利用可能です。
// Chrome 拡張機能と同じサンドボックスも持っています。
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })

contextBridge.exposeInMainWorld('api', {
  getImagesAndDirs: (path) => ipcRenderer.invoke('get_images_and_dirs', path),
  runPy: () => ipcRenderer.invoke('run_py'),
  onReceiveMessage: (listener) => {
    ipcRenderer.on(
      "message-from-python",
      (event, message) => listener(message),
    );
  },
});
