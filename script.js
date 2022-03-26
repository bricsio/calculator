let operating = false;
const operators = ["&divide", "$times", "&#8722", "&#x2b"];

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
            result = add(x, y);
            break;
        case "subtract":
            result = subtract(x, y);
            break;
        case "multiply":
            result = multiply(x, y);
            break;
        case "divide":
            result = divide(x, y);
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
    if (screen2.innerText.length > 1) {
        screen2.innerText = screen2.innerText.slice(0, screen2.innerText.length - 1);
    } else {
        screen2.textContent = "";
    }
};
let deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", updateDisplayDelete);

/*
scenarios:
1. I am not operating and am entering number => update screen 2
2. I am not operating and am entering decimal => don't allow duplicate decimal
3. I press an operator key => screen1 appends space and operator, screen2 clears
4. I press the equals key => call operator function
*/
let updateDisplay = e => {
    let screen1 = document.querySelector("#screen1"),
        screen2 = document.querySelector("#screen2"),
        input = e.target.value;
    if (!isNaN(input)) {
        screen2
    } else if (operators.indexOf(input) > -1) {

    } else { // equals is pressed

    }
   
};
let smallButtons = Array.from(document.querySelectorAll(".small-button"));
smallButtons.forEach(button => button.addEventListener("click", updateDisplay));

