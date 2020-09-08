const fotoFile = document.getElementById('foto-file');
let imagePreview = document.getElementById('img-preview')
const selectionTool = document.getElementById('selection-tool')

document.getElementById('button-select-image')
.onclick = () => {
    fotoFile.click();
}

window.addEventListener('DOMContentLoaded', () => {
    fotoFile.addEventListener('change', () => {
        let fileURL = fotoFile.files.item(0)

        let reader = new FileReader();

        reader.readAsDataURL(fileURL);

        reader.onload = (e) => {
            imagePreview.src = e.target.result;
        }
    })
})

let startX, startY, relativeStartX, relativeStartY,
endX, endY, relativeEndX, relativeEndY, startSelection = false;

const events = {
    mouseover() {
        this.style.cursor = 'crosshair';
    },
    mousedown() {
        const {clientX, clientY, offsetX, offsetY} = event;

        startX = clientX;
        startY = clientY;
        relativeStartX = offsetX;
        relativeStartY = offsetY;

        startSelection = true;
    },
    mousemove() {
        endX = event.clientX;
        endY = event.clientY;

        if(startSelection) {
            selectionTool.style.display = 'initial';
            selectionTool.style.top = startY + 'px';
            selectionTool.style.left = startX + 'px';

            selectionTool.style.width = (endX - startX) + 'px';
            selectionTool.style.height = (endY - startY) + 'px';
        }
    },
    mouseup() {
        startSelection = false;
    },
}

Object.keys(events).forEach((e) => {
    imagePreview.addEventListener(e, events[e])
})