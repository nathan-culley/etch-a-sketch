const wholeGrid = document.getElementById('wholeGrid');

for (i = 0; i < 256; i++) {
    const gridSquare = document.createElement("p");
    wholeGrid.appendChild(gridSquare);
    gridSquare.classList.add("grid-item");
}