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