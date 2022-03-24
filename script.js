let add = (x, y) => {
    return x + y;
};

let subtract = (x, y) => {
    return x - y;
};

let multiply = (x, y) => {
    return x*y;
};

let divide = (x, y) => {
    return  x/y;
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
}

let updateDisplay = e => {

}

let userInput = document.getElementById("user-input");
userInput.addEventListener('keydown', updateDisplay);