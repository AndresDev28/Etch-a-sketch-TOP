
const container = document.getElementById("container");

function makeGrid(rows, cols) {
    for (let c = 0; c < (rows * cols); c++) {
        const cell = document.createElement("div");
        cell.innerText = (c + 1);
        cell.classList.add("grid-item");
        container.appendChild(cell);

        // Add an event listener for hover effect
        cell.addEventListener('mouseenter', () => {
            cell.style.bacgroundColor = 'Black';
        });

        // Reset color when mouse leaves the cell
        cell.addEventListener('mouseleave', () => {
            cell.style.backgroundColor = '';
        })
    }
};

makeGrid(16, 16);
