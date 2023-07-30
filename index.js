let body = document.querySelector('body');

// this function creates a grid of "child divs" within the parent div, depending on the number input
function createGrid(number) {
    // selects the "parent div" already in the HTML file
    const parentDiv = document.getElementById('parentDiv');
    const fraction = 100/number;
    const strFraction = fraction.toString();
    for (let i = 0; i < number * number; i++) {
        const childDiv = document.createElement('div');
        childDiv.style.border = '1px solid black';
        childDiv.style.width = strFraction + '%';
        childDiv.style.height = strFraction + '%';
        childDiv.setAttribute('class', 'square');
        childDiv.setAttribute('hover-count', '0');
        parentDiv.appendChild(childDiv);
    }
    return;
};

// creates the initial 16 x 16 grid
createGrid(16);

// darkens the square by a percentage
function darkenSquare(square, percentage) {
    let hoverCount = parseInt(square.getAttribute('hover-count'));
    hoverCount = Math.min(hoverCount + 1, 10);
    square.setAttribute('hover-count', hoverCount);
    // because each square's background color starts as 100% white, I used the calculation 
    // below to reduce that value by a percentage each each time the square is hovered over
    const newColorValue = 100 - hoverCount * percentage;
    square.style.backgroundColor = `rgb(${newColorValue}%, ${newColorValue}%, ${newColorValue}%)`;
};

// event listener for mouseover to darken the square
let square = document.querySelectorAll('.square');
square.forEach((item) => {
    item.addEventListener('mouseover', function() {
        darkenSquare(item, 10);
    });
});

// replaces the 16 x 16 grid with a new one with up to 100 x 100 squares, depending on the user's input on a prompt
let button = document.querySelector('button');
button.addEventListener('click', function() {
    const number = parseInt(prompt('How many squares do you want in the grid? You can enter a number between 16 and 100.'));
    if (number > 15 && number < 101) {
        body.removeChild(parentDiv);
        const newGrid = document.createElement('div');
        newGrid.setAttribute('id', 'parentDiv');
        body.insertBefore(newGrid, button);
        createGrid(number);
        
        // reattach the event listener to the new squares
        square = document.querySelectorAll('.square');
        square.forEach((item) => {
            item.addEventListener('mouseover', function() {
                darkenSquare(item, 10);
            });
        });
    } else {
        window.alert('Please try again and enter a number between 16 and 100.');
    }
});