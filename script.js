// Functions to change background color
let body = document.querySelector('body');
function changeColor(color) {
    body.style.backgroundColor = color;
}
function getColor() {
    let color = prompt("What color would you like?");
    changeColor(color);
}