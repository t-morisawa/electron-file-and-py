window.addEventListener('DOMContentLoaded', async () => {
    const rootDir = "/tmp/sample";
    const fileNames = await window.api.getImagesAndDirs(rootDir);
    const fileListElem = document.getElementById('file_list')
    fileNames.forEach((fileName) => {
        const element = document.createElement('li')
        element.innerText = fileName
        element.addEventListener('click', (e) => {
            document.getElementById('selected_file').innerText = e.target.innerText
            const imagePath = document.getElementById('dir_name').innerText + '/' + e.target.innerText
            document.getElementById('image').src = imagePath
        })
        fileListElem.appendChild(element)
    });
    document.getElementById('dir_name').innerText = rootDir
})
