const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "20px";
container.style.padding = "20px";
for (let i = 1; i <= 16; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.style.display = "flex";
    rowContainer.style.gap = "20px";
    for (let j = 1; j <= 16; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.width = "40px";
        squareDiv.style.height = "40px";
        squareDiv.classList.add("square");
        rowContainer.appendChild(squareDiv);
    }
    container.appendChild(rowContainer);
}

container.addEventListener("mouseover", e => {
    if (e.target.className === "square") {
        e.target.classList.toggle("hover");
    }
});

container.addEventListener("mouseout", e => {
    if (e.target.className === "square hover") {
        e.target.classList.toggle("hover");
    }
});