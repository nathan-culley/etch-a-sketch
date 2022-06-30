const wholeGrid = document.getElementById('wholeGrid');

for (i = 0; i < 16; i++) {
    const gridSquare = document.createElement("div");
    wholeGrid.appendChild(gridSquare);
    gridSquare.classList.add("grid-item");
}