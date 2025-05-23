let container = document.getElementById('container')
// console.log(container);

function createGrid() {
    for (let i = 0; i < 32 * 20; i++) {
        let  square = document.createElement('div');
        square.classList.add('square')
        square.style.width = '100%'   
        square.style.aspectRatio = '1 / 1'; //make it square
        square.style.background = 'transparent'
        square.style.border = '1px solid #eee1e5'
        container.appendChild(square)
    }  
    
    container.style.display ='grid'
    container.style.gridTemplateColumns = 'repeat(32, 1fr)';
}

createGrid()

// choose volor
let currentColor = 'black'

let paletteColors = document.querySelectorAll('#palette-left div, #palette-right div')

for (let i = 0; i < paletteColors.length; i++) {
    // console.log(paletteColors[i]);
    paletteColors[i].addEventListener('click' , function () {
        // gets the backgroundcolor of the clicked box
        currentColor = window.getComputedStyle(this).backgroundColor
        // console.log(currentColor);
    })  
}

// click or darg
let isDrawing = false

container.addEventListener('mousedown' , () => {
    isDrawing = true
    // console.log(isDrawing);
})

container.addEventListener('mouseup' , () => {
    isDrawing = false
    // console.log(isDrawing);
})

// add color on hover if mouse down
container.addEventListener('mouseover' , function(e) {
    if (isDrawing && e.target.classList.contains('square')) {
        e.target.style.backgroundColor = currentColor
    }
})

// reset btn
function resetGrid() {
    let squares = document.querySelectorAll('.square'); 

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'transparent'; 
    }
}

