window.addEventListener('DOMContentLoaded', async () => {
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
})


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
