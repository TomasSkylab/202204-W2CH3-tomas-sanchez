const display = document.querySelector(".display1");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const percentage = document.querySelector(".percentage");
const value = document.querySelector(".value");
const dot = document.querySelector(".punto");

let num = "";
let previousNum = "";

function numSelector(event) {
    num += event.target.textContent;
    display.textContent = num;

    console.log("NUM", num);
    console.log("PREVIOUS NUM", previousNum);
}

numbers.forEach((number) => number.addEventListener("click", numSelector));

function resetDisplay() {
    num = "";
    display.textContent = "0";
}

clearAll.addEventListener("click", resetDisplay);

function decimal() {
    if (!num.includes(".")) {
        num += ".";
        display.textContent = num;
    }

    return;
}

dot.addEventListener("click", decimal);

let operation = "";
function operatorManager(event) {
    operation = event.target.innerText;

    previousNum = num;

    num = "";
}

operators.forEach((operator) =>
    operator.addEventListener("click", operatorManager)
);

function getEqual() {
    switch (operation) {
        case "+":
            result = Number(previousNum) + Number(num);
            break;
        case "-":
            result = Number(previousNum) - Number(num);
            break;
        case "*":
            result = Number(previousNum) * Number(num);
            break;
        case "/":
            result = Number(previousNum) / Number(num);
            break;

        default:
            break;
    }
    num = result.toString();
    previousNum = "";

    display.innerText = result.toString();
}

equal.addEventListener("click", getEqual);

function changeSign() {
    if (num[0] === "-") {
        num = num.substring(1);
    } else {
        num = "-" + num;
    }

    display.innerText = num;
}

value.addEventListener("click", changeSign);
