const container = document.querySelector('.container');
let dimensions = 50;
let border = 0;
let boxDimensions = 0;

function findBoxDimensions() {
    boxDimensions = parseInt(container.offsetHeight, 10)/dimensions - border * 2;
}

function makeParentBox(num) { //makes the row
    const newDev = document.createElement('div');
    newDev.classList.add('parent');
    newDev.setAttribute('id', `row${num}`)
    container.appendChild(newDev);
}

function makeChildBox(parent) { //makes a box in a row
    const newDev = document.createElement('div');
    newDev.classList.add('child');
    findBoxDimensions();
    newDev.style.width = `${boxDimensions}px`;
    newDev.style.height = `${boxDimensions}px`;
    parent.appendChild(newDev);
}

function makeGrid() {
    for (let i=0; i<dimensions; i++) {
        makeParentBox(i+1); //makes rows with correct class number
        const box = document.querySelector(`#row${i+1}`); //select row
        for (let n=0; n<dimensions; n++) {
            makeChildBox(box); //add boxes to the row
        }
    }
    checkBox(); // add event listeners
}

function color() {
    this.classList.add('selected'); // add class with choosen color
}

function checkBox() {
    const boxes = document.querySelectorAll('.child');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', color); //add listener to every box
    })
}

function deleteGrid() { //removes all boxes then all rows
    const boxes = document.querySelectorAll('.child');
    boxes.forEach(box => {
        box.remove();
    })
    const rows = document.querySelectorAll('.parent');
    rows.forEach(row => {
        row.remove();
    })
}

function askDimensions() {  //rewrites dimensions and then remakes grid
    let answer = prompt('Pick the dimensions of the canvas between 1-100.');
    if (answer > 0 && answer < 101) {
        dimensions = answer;
        deleteGrid();
        makeGrid();
    }
    else {
        alert('Please enter a number between 1-100');
    }
}

makeGrid();