const container = document.querySelector("#container");
const SQUARE_SIDE_LENGTH = 640;

function createGrid(container, squaresPerSide, squareSideLength) {
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.padding = "20px";
    for (let i = 1; i <= squaresPerSide; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.style.display = "flex";
        rowContainer.style.justifyContent = "center";
        for (let j = 1; j <= squaresPerSide; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.style.width = `${squareSideLength/squaresPerSide}px`;
            squareDiv.style.height = `${squareSideLength/squaresPerSide}px`;
            squareDiv.classList.add("square");
            rowContainer.appendChild(squareDiv);
        }
        container.appendChild(rowContainer);
    }
}

container.addEventListener("mouseover", e => {
    if (e.target.className === "square") {
        e.target.classList.add("hover");
    }
});

const resizeBtn = document.querySelector("button");
resizeBtn.addEventListener("click", e => {
    let squaresPerSide = +prompt("Number of squares per side (1 - 100): ");
    if (squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Invalid input number!")
    } else {
        container.innerHTML = "";
        createGrid(container, squaresPerSide, SQUARE_SIDE_LENGTH);
    }
});

createGrid(container, 16, SQUARE_SIDE_LENGTH);