//Make grid using javascript
//Original starter
AddBoxes();

//Obtain the div that will contain the grid

function AddBoxes(grid_size = 16) {
    let grid_container = document.querySelector(".sketch");
    let total_boxes = Math.pow(grid_size, 2);
    let width_and_height = 512/grid_size;
    for (let i = 0; i < total_boxes; i++) {
        let grid_div = document.createElement("div");
        grid_div.classList.add("grid_div");
        grid_div.style.width = width_and_height + "px";
        grid_div.style.height = width_and_height + "px";
        grid_div.addEventListener("mouseover", ChangeColorBlack)
        grid_container.appendChild(grid_div);
    } 
}


function ResetGrid() {
    let grid_container = document.querySelector(".sketch");
    while (grid_container.firstChild) {
        grid_container.removeChild(grid_container.firstChild);
    }
}


function GridSize() {
    let grid_size = 16;
    do {
        grid_size = Number(prompt("How big would you like the grid? Only one number is needed as the grid will a square (e.g 64)"));
    } while(grid_size < 1 || grid_size >100);
    ResetGrid();
    let total_squares = Math.pow(grid_size,2);
    let width_and_height_of_single_div = 512 / grid_size;
    AddBoxes(grid_size);
}

function ChangeColorBlack(e) {
    this.style.backgroundColor = "black";
}

function ChangeColorWhite(e) {
    this.style.backgroundColor = "white";
}

//Color Picker Color
function ChangeColorBasedOnPick(e) {
    let color = document.getElementById("favcolor").value;
    this.style.backgroundColor = color;
}

//Color Function
function ColorSelector() {
    let grid_div = document.querySelectorAll(".grid_div");
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorBlack));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorWhite));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeToRainbowColor));
    grid_div.forEach(div => div.addEventListener("mouseover", ChangeColorBasedOnPick));
}

//Id Selection
let color_selector = document.querySelector("#favcolor");
color_selector.addEventListener("click", ColorSelector);

//Rainbow color
function ChangeToRainbowColor(e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
}

//Rainbow function
function Rainbow() {
    let grid_div = document.querySelectorAll(".grid_div");
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorBlack));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorWhite));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorBasedOnPick));
    grid_div.forEach(div => div.addEventListener("mouseover", ChangeToRainbowColor));
}


//Rainbow button
let rainbow_button = document.querySelector(".rainbow");
rainbow_button.addEventListener("click", Rainbow);

//Eraser function
function Eraser() {
    let grid_div = document.querySelectorAll(".grid_div");
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorBlack));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeToRainbowColor));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorBasedOnPick));
    grid_div.forEach(div => div.addEventListener("mouseover", ChangeColorWhite));
}

//Eraser Button
let eraser_button = document.querySelector(".eraser");
eraser_button.addEventListener("click", Eraser);

//Clear function
function Clear() {
    let grid_div = document.querySelectorAll(".grid_div");
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorBlack));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorWhite));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeToRainbowColor));
    grid_div.forEach(div => div.removeEventListener("mouseover", ChangeColorBasedOnPick));
    grid_div.forEach(div => div.style.backgroundColor = "white");
}
//Clear Button
let clear_button = document.querySelector(".clear");
clear_button.addEventListener("click", Clear);
//Grid Pixel Button
let grid_pixel_button = document.querySelector(".pixel_selector");
grid_pixel_button.addEventListener("click", GridSize);




   