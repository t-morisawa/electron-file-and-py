window.addEventListener('DOMContentLoaded', async () => {
    const rootDir = "/tmp/sample";
    const fileNames = await window.api.getImagesAndDirs(rootDir);
    const fileListElem = document.getElementById('file_list')
    fileNames.forEach(fileName => {
        const element = document.createElement('li')
        element.innerText = fileName
        fileListElem.appendChild(element)
    });
    document.getElementById('dir_name').innerText = rootDir
})
