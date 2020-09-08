const fotoFile = document.getElementById('foto-file');

document.getElementById('button-select-image')
.onclick = () => {
    fotoFile.click();
}

window.addEventListener('DOMContentLoaded', () => {
    fotoFile.addEventListener('change', () => {
        let file = fotoFile.files.item(0)

        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = (e) => {
            let image = document.getElementById('img-preview');
            image.src = e.target.result;
        }
    })
})