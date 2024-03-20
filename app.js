"use strict"
const GRID_WIDTH = 500;
const GRID_HEIGHT = 500;
let eraser_active = false;
let rainbow = false;
let black = true;
createGrid();
updateActiveButton();

function setEraserTrue(){
    updateActiveButton();
    eraser_active = true;
    black = false;
    rainbow = false;
}

function setBlackTrue(){
    updateActiveButton();
    black = true;
    rainbow = false;
    eraser_active = false;
}

function setRainbowTrue(){
    updateActiveButton();
    rainbow = true;
    eraser_active = false;
    black = false;
}

function createGrid() {
    removeGrid();
    const container = document.querySelector(".grid-container");
    const size = document.querySelector("#grid-value").value;
    let divWidth = GRID_WIDTH/size;
    let divHeight = GRID_HEIGHT/size;
    for (let i = 1; i <= size; i++){
        const newdiv = document.createElement("div");
        newdiv.classList.add("row-container");
        for (let i = 1; i <= size; i++){
            let columnDiv = document.createElement("div");
            columnDiv.classList.add("column-div");
            columnDiv.style.height = `${divHeight}px`;
            columnDiv.style.width = `${divWidth}px`;
            newdiv.appendChild(columnDiv);
        }
        container.appendChild(newdiv);
    }
    updateValue();
    addHoverEffect();
}



function addHoverEffect(){
    const box = document.querySelectorAll(".column-div");
    box.forEach((element) => 
    element.addEventListener("mouseover", () =>{
        if (black){
        element.style.backgroundColor = "black";}
        if (rainbow){
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;
            element.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
        if (eraser_active){
            element.style.backgroundColor = "white";
        }
    }
        ))
}


function removeGrid(){
    const rows = document.querySelectorAll(".row-container");
    rows.forEach((element) => {
        element.remove();
    }
    )
}

function resetGrid(){
    const box = document.querySelectorAll(".column-div");
    box.forEach((element) => {
        element.style.backgroundColor = "white";
    }
    )
}

function updateValue(){
    const value = document.getElementById("curr");
    const size = document.querySelector("#grid-value").value;
    value.textContent = `Current Grid: ${size}x${size}`;
}

function updateActiveButton() {
    let buttons = document.querySelectorAll(".menubuttons");
    buttons.forEach((button) => {

        button.addEventListener("click", function () {
            let current = document.querySelector(".active");
            if (current) {
                current.classList.remove("active");
            }
            button.classList.add("active");
        });
    });
}
