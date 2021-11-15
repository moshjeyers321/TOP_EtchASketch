const rows = 10;
const cols = 10;
const DEFAULT_SIZE = 25;

const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    resetGrid();
});

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function createGrid(size) {
    grid.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.style.cssText = "background-color: white"
        square.addEventListener('mouseover', changeColor);
        grid.appendChild(square);
    }
}

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    
    let size = DEFAULT_SIZE;
    do {
        size = prompt("Input a new size less than or equal to 75 for the grid")

    } while (size > 75)

    createGrid(size);
}



createGrid(DEFAULT_SIZE);