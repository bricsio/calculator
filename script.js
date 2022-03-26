let operating = false;
const operators = ["÷", "×", "−", "+", "="];

let add = (x, y) => {
    return x + y;
};

let subtract = (x, y) => {
    return x - y;
};

let multiply = (x, y) => {
    return x * y;
};

let divide = (x, y) => {
    return x / y;
};

let operate = (operator, x, y) => {
    let result;
    switch (operator) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
    }
    return result;
};

// Clear button: clear the display
let updateDisplayClear = e => {
    let screen1 = document.querySelector("#screen1"),
        screen2 = document.querySelector("#screen2");
    operating = false;
    screen1.textContent = "";
    screen2.textContent = "";

};
let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", updateDisplayClear);


// Delete button: backspace key action for second screen
let updateDisplayDelete = e => {
    let screen2 = document.querySelector("#screen2");
    if (screen2.textContent.length > 1) {
        screen2.textContent = screen2.textContent.slice(0, screen2.textContent.length - 1);
    } else {
        screen2.textContent = "";
    }
};
let deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", updateDisplayDelete);