window.addEventListener('DOMContentLoaded', () => {
  showFileList()
  document.getElementById('run_py_button').addEventListener('click', (e) => {
    onClickRunPythonButton()
  })
  window.api.onReceiveMessage(listener)
})

const onClickRunPythonButton = async () => {
  const resultListElem = document.getElementById('py_result_list')
  resultListElem.innerHTML = ""
  window.api.runPy();
}

const showFileList = async () => {
  const rootDir = "/tmp/sample";
  const fileList = await window.api.getImagesAndDirs(rootDir);
  const fileListElem = document.getElementById('file_list')
  fileList.forEach((file) => {
    const element = document.createElement('li')
    element.innerText = file.name
    element.dataset.fullPath = file.full_path
    element.dataset.isDir = file.is_dir
    element.addEventListener('click', (e) => {
      onClickFileName(e)
    })
    fileListElem.appendChild(element)
  });
  document.getElementById('dir_name').innerText = rootDir
}

// ファイル・ディレクトリクリック時のイベントを追加
const onClickFileName = async (e) => {
  document.getElementById('selected_file').innerText = e.target.innerText

  const imageElem = document.getElementById('image')
  const imageListElem = document.getElementById('image_list')

  if (e.target.dataset.isDir == "true") {
    imageElem.style.display = "none"
    imageListElem.style.display = ""
    imageListElem.innerHTML = ""
    const fileList = await window.api.getImagesAndDirs(e.target.dataset.fullPath);
    fileList.forEach((file) => {
      if (file.isDir == "true") return
      const element = document.createElement('img')
      element.src = file.full_path
      element.width = 200
      imageListElem.appendChild(element)
    });
  } else {
    imageElem.style.display = ""
    imageListElem.style.display = "none"
    imageElem.src = e.target.dataset.fullPath
  }
}

const listener = (message) => { 
  const resultListElem = document.getElementById('py_result_list')
  const element = document.createElement('li')
  element.innerText = message
  resultListElem.appendChild(element)
}
