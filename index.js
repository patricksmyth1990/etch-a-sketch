// selects the "parent div" already in the HTML file
const parentDiv = document.querySelector('div');

// this function creates a grid of "child divs" within the parent div, depending on the number input
function createGrid(number) {
    const fraction = 100/number;
    const strFraction = fraction.toString();
    for (let i = 0; i < number * number; i++) {
        const childDiv = document.createElement('div');
        childDiv.style.border = '1px solid black';
        childDiv.style.width = strFraction + '%';
        childDiv.style.height = strFraction + '%';
        childDiv.setAttribute('class', 'square');
        parentDiv.appendChild(childDiv);
    }
    return;
};

// creates the initial 16 x 16 grid
createGrid(16);

// changes the color of any square when moused over
let square = document.querySelectorAll('.square');

square.forEach((item) => {
    item.addEventListener('mouseover', function() {
        item.setAttribute('class', 'hoveredOver');
    });
});

// replaces the 16 x 16 grid with a new one with up to 100 x 100 squares, depending on the user's input on a prompt
let button = document.querySelector('button');

button.addEventListener('click', function() {
    const number = parseInt(prompt('How many squares do you want in the grid? You can enter a number between 16 and 100.'));
    if (number > 15 && number < 101) {
        document.removeChild(parentDiv);
        const newGrid = document.createElement('div');
        newGrid.setAttribute('id', 'parentDiv');
        document.insertBefore(newGrid, 'button');
        createGrid(number);
    };
});