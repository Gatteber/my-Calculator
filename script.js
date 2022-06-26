//button classes:
//power-fnc
//divide-fnc
//multiply-fnc
//clear-fnc
//backspace-fnc
//subtract-fnc
//add-fnc
//decimal-btn
//operation-fnc

let operation = null;
let calculatorStorage = [];
const addOperation = (a, b) => { return a + b };
const subtractOperation = (a, b) => { return a - b };
const multiplyOperation = (a, b) => { return a * b };
const divideOperation = (a, b) => { return a / b };

//Operations
//[0] is first term, [1] is second. convert to Number().
function operate (array1Index, array2Index) {
    if (array2Index == 0 && operation == divideOperation){
        calculatorStorage = [];
        operation = null;
        return divideByZero();
    } else {
        let result = operation(+array1Index, +array2Index);
        displayUpdate.innerHTML = +result.toFixed(2);
        calculatorStorage = [];
        operation = null;
    }
}

//not sure what this does but it works like sleep.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function divideByZero() { //catch for 0
    displayUpdate.innerHTML = "Nice Try ;)";
    for (let i = 0; i < 3; i++) {
        await sleep(i * 1000);
    }
    displayUpdate.innerHTML = null;
}

//general selector
const displayUpdate = document.querySelector('.numbers');

//number/operator functions
function updateNum (num) {
//    console.log(displayUpdate.innerHTML.length);
    if (displayUpdate.innerHTML.length < 19) {
        displayUpdate.innerHTML += num;
    } else if (displayUpdate.innerHTML.length == 19) {
        //console.log("error, too many numbers");
        displayUpdate.innerHTML += num;
        let longExpo = +displayUpdate.innerHTML;
        //console.log(longExpo.toPrecision(14));
        longExpo = longExpo.toPrecision(14);
        displayUpdate.innerHTML = null;
        displayUpdate.innerHTML = longExpo;
    } else {
        //alert("Your number is too long!");
        //does nothing
    }
};

const btnAddClick = document.querySelector('.add-fnc');
btnAddClick.onclick = () => {
    operation = addOperation;
    calculatorStorage.push(displayUpdate.innerHTML);
    displayUpdate.innerHTML = null;
};

const btnSubtractClick = document.querySelector('.subtract-fnc');
btnSubtractClick.onclick = () => {
    operation = subtractOperation;
    calculatorStorage.push(displayUpdate.innerHTML);
    displayUpdate.innerHTML = null;
}

const btnMultiplyClick = document.querySelector('.multiply-fnc');
btnMultiplyClick.onclick = () => {
    operation = multiplyOperation;
    calculatorStorage.push(displayUpdate.innerHTML);
    displayUpdate.innerHTML = null;
};

const btnDivideClick = document.querySelector('.divide-fnc');
btnDivideClick.onclick = () => {
    operation = divideOperation;
    calculatorStorage.push(displayUpdate.innerHTML);
    displayUpdate.innerHTML = null;
};

//equals
const btnEqualsClick = document.querySelector('.operation-fnc');
btnEqualsClick.onclick = () => {
    if (displayUpdate.innerHTML == null || operation == null) {
        //alert("Please Enter a number first!");
    }
    else {
        calculatorStorage.push(displayUpdate.innerHTML);
        displayUpdate.innerHTML = null;
        operate(calculatorStorage[0], calculatorStorage[1]);
    }
};

//clear
const clearButtonClick = document.querySelector('.clear-fnc');
clearButtonClick.onclick = () => {
    calculatorStorage = [];
    displayUpdate.innerHTML = null;
    console.log(calculatorStorage);
}

//expo
const powerButtonClick = document.querySelector('.power-fnc');
powerButtonClick.onclick = () => {
    let powerFunc = displayUpdate.innerHTML;
    let powerResult = powerFunc ** 2;
    if (powerResult > 1000000000000) { //janky but works
        displayUpdate.innerHTML = powerResult.toPrecision(14);
    } else {
        displayUpdate.innerHTML = powerResult;
    }
}


//decimal
const decimalButtonClick = document.querySelector('.decimal-btn');
decimalButtonClick.onclick = () => {
    let decimalUpdate = displayUpdate.innerHTML;
    if (decimalUpdate.includes(".")) {
        //do nothing
    } else {
        displayUpdate.innerHTML += "."
    }
}

//backspace
const backspaceButtonClick = document.querySelector('.backspace-fnc');
backspaceButtonClick.onclick = () => {
    let backUp = displayUpdate.innerHTML;
    backUp = backUp.slice(0, -1);
    displayUpdate.innerHTML = backUp;
}

//number updates
//1
const btn1Click = document.querySelector('.btn-1');
btn1Click.onclick = () => {updateNum(1)}; 

//2
const btn2Click = document.querySelector('.btn-2');
btn2Click.onclick = () => {updateNum(2)}; 

//3
const btn3Click = document.querySelector('.btn-3');
btn3Click.onclick = () => {updateNum(3)}; 

//4
const btn4Click = document.querySelector('.btn-4');
btn4Click.onclick = () => {updateNum(4)}; 

//5
const btn5Click = document.querySelector('.btn-5');
btn5Click.onclick = () => {updateNum(5)}; 

//6
const btn6Click = document.querySelector('.btn-6');
btn6Click.onclick = () => {updateNum(6)}; 

//7
const btn7Click = document.querySelector('.btn-7');
btn7Click.onclick = () => {updateNum(7)}; 

//8
const btn8Click = document.querySelector('.btn-8');
btn8Click.onclick = () => {updateNum(8)}; 

//9
const btn9Click = document.querySelector('.btn-9');
btn9Click.onclick = () => {updateNum(9)}; 

//0
const btn0Click = document.querySelector('.btn-0');
btn0Click.onclick = () => {updateNum(0)}; 

//keydown functionality
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "0") {
        btn0Click.classList.add('button-click');
        updateNum(0);
        btn0Click.addEventListener("transitionend", () => {
            btn0Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "1") {
        btn1Click.classList.add('button-click');
        updateNum(1);
        btn1Click.addEventListener("transitionend", () => {
            btn1Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "2") {
        btn2Click.classList.add('button-click');
        updateNum(2);
        btn2Click.addEventListener("transitionend", () => {
            btn2Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "3") {
        btn3Click.classList.add('button-click');
        updateNum(3);
        btn3Click.addEventListener("transitionend", () => {
            btn3Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "4") {
        btn4Click.classList.add('button-click');
        updateNum(4);
        btn4Click.addEventListener("transitionend", () => {
            btn4Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "5") {
        btn5Click.classList.add('button-click');
        updateNum(5);
        btn5Click.addEventListener("transitionend", () => {
            btn5Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "6") {
        btn6Click.classList.add('button-click');
        updateNum(6);
        btn6Click.addEventListener("transitionend", () => {
            btn6Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "7") {
        btn7Click.classList.add('button-click');
        updateNum(7);
        btn7Click.addEventListener("transitionend", () => {
            btn7Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "8") {
        btn8Click.classList.add('button-click');
        updateNum(8);
        btn8Click.addEventListener("transitionend", () => {
            btn8Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "9") {
        btn9Click.classList.add('button-click');
        updateNum(9);
        btn9Click.addEventListener("transitionend", () => {
            btn9Click.classList.remove('button-click');
        });
    }
    else if(keyCode === "+") {
        btnAddClick.classList.add('button-click');
        operation = addOperation;
        calculatorStorage.push(displayUpdate.innerHTML);
        displayUpdate.innerHTML = null;
        btnAddClick.addEventListener("transitionend", () => {
            btnAddClick.classList.remove('button-click');
        });
    }
    else if(keyCode === "-") {
        btnSubtractClick.classList.add('button-click');
        operation = subtractOperation;
        calculatorStorage.push(displayUpdate.innerHTML);
        displayUpdate.innerHTML = null;
        btnSubtractClick.addEventListener("transitionend", () => {
            btnSubtractClick.classList.remove('button-click');
        });
    }
    else if(keyCode === "*") {
        btnMultiplyClick.classList.add('button-click');
        operation = multiplyOperation;
        calculatorStorage.push(displayUpdate.innerHTML);
        displayUpdate.innerHTML = null;
        btnMultiplyClick.addEventListener("transitionend", () => {
            btnMultiplyClick.classList.remove('button-click');
        });
    }
    else if(keyCode === "/") {
        btnDivideClick.classList.add('button-click');
        operation = divideOperation;
        calculatorStorage.push(displayUpdate.innerHTML);
        displayUpdate.innerHTML = null;
        btnDivideClick.addEventListener("transitionend", () => {
            btnDivideClick.classList.remove('button-click');
        });
    }
    else if(keyCode === ".") {
        decimalButtonClick.classList.add('button-click');
        let decimalUpdate = displayUpdate.innerHTML;
        if (decimalUpdate.includes(".")) {
            //do nothing
        } else {
            displayUpdate.innerHTML += "."
        }
        decimalButtonClick.addEventListener("transitionend", () => {
            decimalButtonClick.classList.remove('button-click');
        });
    }
    else if(keyCode === "Backspace") {
        backspaceButtonClick.classList.add('button-click');
        let backUp = displayUpdate.innerHTML;
        backUp = backUp.slice(0, -1);
        displayUpdate.innerHTML = backUp;
        backspaceButtonClick.addEventListener("transitionend", () => {
            backspaceButtonClick.classList.remove('button-click');
        });
    }
    else if(keyCode === "Enter") {
        btnEqualsClick.classList.add('button-click');            
        if (displayUpdate.innerHTML == null || operation == null) {
        //alert("Please Enter a number first!");
    }
        else {
        calculatorStorage.push(displayUpdate.innerHTML);
        displayUpdate.innerHTML = null;
        operate(calculatorStorage[0], calculatorStorage[1]);
    }
    btnEqualsClick.addEventListener("transitionend", () => {
        btnEqualsClick.classList.remove('button-click');
    });
    }
});