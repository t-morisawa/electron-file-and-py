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
            document.getElementById('selected_file').innerText = e.target.innerText
            if (e.target.dataset.isDir == "true") {
                document.getElementById('image').src = ""
            } else {
                document.getElementById('image').src = e.target.dataset.fullPath
            }
        })
        fileListElem.appendChild(element)
    });
    document.getElementById('dir_name').innerText = rootDir
})
