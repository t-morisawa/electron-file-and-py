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
  selectDirectory: () => ipcRenderer.invoke('select_directory'),
  runPy: () => ipcRenderer.invoke('run_py'),
  addListenerOnPythonMessage: (listener) => {
    ipcRenderer.on(
      "python-message",
      (event, message) => listener(message),
    );
  },
  addListenerOnPythonEnd: (listener) => {
    ipcRenderer.on(
      "python-end",
      (event, code, signal) => listener(code, signal),
    );
  },
});
