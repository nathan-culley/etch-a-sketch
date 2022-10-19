const wholeGrid = document.getElementById('wholeGrid');

for (i = 0; i < 256; i++) {
    const gridSquare = document.createElement("p");
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

//this event listener and function combination, if enabled, return each square to its original state after the mouse leaves it

/* Array.from(gridItems).forEach(item => {
    item.addEventListener('mouseout', (event) => lightenSquare(item));
}) */
/* function lightenSquare(item) {
    item.setAttribute("style", "background-color:whitesmoke");
    console.log("mouseout");
} */