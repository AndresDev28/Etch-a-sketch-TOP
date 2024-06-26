
const container = document.getElementById("container");
const changeGridBtn = document.getElementById("changeGridBtn");

// Function to prompt user for number of square per side
function changeGridSize () {
    let newSize = prompt("Enter the number of square per side for the new grid:");


    // check if newSize is a valid number
    if (newSize !== null && !isNaN(newSize) && newSize > 0 && newSize <=100) {
        
        // Remove existing grid
        container.innerHTML = '';

        // Generate new grid
        makeGrid(newSize, newSize);
    } else {
        alert("Please enter a number greater than 0 and smaler than 100.");
    }
}

changeGridBtn.addEventListener('click', changeGridSize);

function makeGrid(rows, cols) {
    // calculate th size of each square dynamically to maintain the toal number of pixels
    const conatainerSize = container.clientWidth;
    const squareSize = conatainerSize / cols;

    for (let c = 0; c < (rows * cols); c++) {
        const square = document.createElement("div");
        // square.innerText = (c + 1);
        square.classList.add("grid-item");
        square.style.width = squareSize + 'px'; // Set width of square
        square.style.height = squareSize + 'px'; // Set heigh of square
        container.appendChild(square);

        let interactions = 0; // counter of interactions

        // Add an event listener for hover effect
        square.addEventListener('mouseenter', function() {
            const randomColor = randomizeColor(); //Get random color
            square.style.backgroundColor = randomColor; //set random color
            square.innerText = (c + 1);
            interactions++;
            // randomizeColor(square); // randomize color
            darkenSquare(square, interactions) // Darken square
        });

        // Reset color when mouse leaves the square
        square.addEventListener('mouseleave', () => {
            square.style.backgroundColor = '';
            square.innerText = '';
        });
    }
}

// function to create a RGB random color

function randomizeColor() {
    const r = Math.floor(Math.random() * 256); // For the red component
    const g = Math.floor(Math.random() * 256); // For the green component
    const b = Math.floor(Math.random() * 256); // For the blue component

    return `rgb(${r}, ${g}, ${b})`; // Set random color
}

// function to darken the square progressively

function darkenSquare(square, interactions) {
    const opcacity = 1 - (interactions * 0.1); // calculate opacity
    square.style.opcacity = opcacity; // set opacity
}


makeGrid(16, 16);
