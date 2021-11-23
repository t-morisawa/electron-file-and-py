window.addEventListener('DOMContentLoaded', async () => {
    const rootDir = "/tmp/sample";
    const fileList = await window.api.getImagesAndDirs(rootDir);
    const fileListElem = document.getElementById('file_list')
    fileList.forEach((file) => {
        const element = document.createElement('li')
        element.innerText = file.name
        element.dataset.fullPath = file.full_path
        element.addEventListener('click', (e) => {
            document.getElementById('selected_file').innerText = e.target.innerText
            document.getElementById('image').src = e.target.dataset.fullPath
        })
        fileListElem.appendChild(element)
    });
    document.getElementById('dir_name').innerText = rootDir
})
