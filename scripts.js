let gridSide = 16;

function setGrid(gridSide) {
    gridSide = prompt("Enter the number of squares you would like each side of the grid to have (must be between 1 and 100):");
    while(isNaN(gridSide) == true | gridSide > 100 | gridSide < 1) {
        gridSide = prompt("Please ensure your input is a number from 1 to 100");
    }
    console.log(gridSide);
    generateGrid(gridSide);
    
} 

generateGrid(gridSide);

function generateGrid(gridSide) {
    let gridTotal = gridSide * gridSide;
    console.log(gridSide, gridTotal);
    let root = document.documentElement;
    root.style.setProperty('--grid-side', gridSide);
    const wholeGrid = document.getElementById('wholeGrid');
    
    while (wholeGrid.firstChild) {
        wholeGrid.removeChild(wholeGrid.lastChild);
    }
    
    for (i = 0; i < gridTotal; i++) {
        const gridSquare = document.createElement("div");
        wholeGrid.appendChild(gridSquare);
        gridSquare.classList.add("grid-item");
    }

    const gridItems = document.getElementsByClassName('grid-item');

    Array.from(gridItems).forEach(item => {
        item.addEventListener('mouseover', (event) => darkenSquare(item));
    })

    function darkenSquare(item) {
        item.setAttribute("style", "background-color:black;");
        console.log("mouseover");
}
}
//this event listener and function combination, if enabled, return each square to its original state after the mouse leaves it
/* Array.from(gridItems).forEach(item => {
    item.addEventListener('mouseout', (event) => lightenSquare(item));
}) */
/* function lightenSquare(item) {
    item.setAttribute("style", "background-color:whitesmoke");
    console.log("mouseout");
} */

