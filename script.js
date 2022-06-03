function makeParentBox(num) {
    const newDev = document.createElement('div');
    const container = document.querySelector('.container');
    newDev.classList.add('parent');
    newDev.setAttribute('id', `row${num}`)
    container.appendChild(newDev);
}

function makeChildBox(parent) {
    const newDev = document.createElement('div');
    newDev.classList.add('child');
    parent.appendChild(newDev);
}

let length = 16;
let height = 16;

for (let i=0; i<length; i++) {
    makeParentBox(i+1);
    const box = document.querySelector(`#row${i+1}`);
    for (let n=0; n<height; n++) {
        makeChildBox(box);
    }
}

function color() {
    this.classList.add('selected');
}

const boxes = document.querySelectorAll('.child');
boxes.forEach(box => {
    box.addEventListener('mouseenter', color);
})