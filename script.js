/*

need a 16x16 grid of square divs 
    div could just be empty with black outline->style with css
grid divs should change color when mouse is hovered over -- leaves a (pixelated) trail

add a button that asks user for # of squares per side for a new grid (max 100)

EC: have each pass w/ mouse change to random RGB value. then each pass adds 10% black
    after 10 passes it will be completely black

*/


/* main body of html -> going to add all flex containers and other html elements in here */
const body = document.querySelector('body');

const title = document.createElement('h1');
title.textContent = "Project: Etch-a-Sketch";
body.appendChild(title);

/* will leave as 16 for now but should change based on user input */
const gridSize = 16;

/* container div (grid) for square divs to fill - filled out one row at a time */
const grid = document.createElement('div');
grid.setAttribute('id', 'grid');                                                   /* for css styling */
for (let i=0; i<gridSize; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j=0; j<gridSize; j++) {
        const square = document.createElement('div');
        square.textContent = "Hello World!"                                        /* for testing: remove later */
        square.setAttribute('class', 'square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
        row.appendChild(square);
    }
    grid.appendChild(row)
}
body.appendChild(grid);