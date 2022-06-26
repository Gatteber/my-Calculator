console.log("Hello, World!");


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
console.log(calculatorStorage);
let triedToZero = false;

//[0] is first term, [1] is second. convert to Number().
function operate (array1Index, array2Index) {
    if (array2Index == 0 && operation == divideOperation){
        calculatorStorage = [];
        operation = null;
        //divideByZero();
        return divideByZero();
    } else {
        let result = operation(+array1Index, +array2Index);
        displayUpdate.innerHTML = +result.toFixed(2);
        calculatorStorage = [];
        operation = null;
    //    calculatorStorage.push(displayUpdate.innerHTML);
    //    console.log(calculatorStorage);
    }

}

function checkIfOperation(){
    if(calculatorStorage[0] && calculatorStorage[1]) {
        operate(calculatorStorage[0], calculatorStorage[1]);
    }
};

const addOperation = (a, b) => { return a + b };
const subtractOperation = (a, b) => { return a - b };
const multiplyOperation = (a, b) => { return a * b };
const divideOperation = (a, b) => { 
    if (b === 0) {
        //alert("Error! Don't do that!");
        //divideByZero();
        // calculatorStorage = [];
        // operation = null;
        // return divideByZero();
        triedToZero = true;
    } else {
        return a / b }
    };


//not sure what this does but it checks for divide function.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function divideByZero() {
    displayUpdate.innerHTML = "Nice Try ;)";
    for (let i = 0; i < 3; i++) {
        await sleep(i * 1000);
    }
    displayUpdate.innerHTML = null;
}

const btnAddClick = document.querySelector('.add-fnc');
btnAddClick.onclick = () => {
    operation = addOperation;
    calculatorStorage.push(displayUpdate.innerHTML);
    displayUpdate.innerHTML = null;
//    checkIfOperation();
};

const btnSubtractClick = document.querySelector('.subtract-fnc');
btnSubtractClick.onclick = () => {
    operation = subtractOperation;
    calculatorStorage.push(displayUpdate.innerHTML);
    displayUpdate.innerHTML = null;
//  checkIfOperation();
}

const btnMultiplyClick = document.querySelector('.multiply-fnc');
btnMultiplyClick.onclick = () => {
    operation = multiplyOperation;
    calculatorStorage.push(displayUpdate.innerHTML);
    displayUpdate.innerHTML = null;
//    checkIfOperation();
};


const btnDivideClick = document.querySelector('.divide-fnc');
btnDivideClick.onclick = () => {
    operation = divideOperation;
    calculatorStorage.push(displayUpdate.innerHTML);
    displayUpdate.innerHTML = null;
//    checkIfOperation();
};

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

const clearButtonClick = document.querySelector('.clear-fnc');
clearButtonClick.onclick = () => {
    calculatorStorage = [];
    displayUpdate.innerHTML = null;
    console.log(calculatorStorage);
}

//set the operation
//push the number to the array
//if (a,b)
// Operate();
//




//general selectors
const displayUpdate = document.querySelector('.numbers');

//number/operator functions
function updateNum (num) {
//    console.log(displayUpdate.innerHTML.length);
    if (displayUpdate.innerHTML.length < 19) {
        displayUpdate.innerHTML += num;
    } else if (displayUpdate.innerHTML.length == 19) {
        console.log("error, too many numbers");
        //toExponential();
        //num.toExponential(10);
        displayUpdate.innerHTML += num;
        //[long number]
        //     Idea 1
        // // let longExpo = +displayUpdate.innerHTML;
        // // console.log(typeof(longExpo));
        // // longExpo.toExponential(2);
        // // console.log(longExpo);
        // // displayUpdate.innerHTML = null;
        let longExpo = +displayUpdate.innerHTML;
        console.log(longExpo.toPrecision(15));
        longExpo = longExpo.toPrecision(15);
        displayUpdate.innerHTML = null;
        displayUpdate.innerHTML = longExpo;

        //use this function to convert to scientific notation (fix later)
    } else {
        alert("Your number is too long!");
    }
//    console.log(num); check if number is right
};

//number updates, ineffecient but not sure how to reduce
//1
const btn1Click = document.querySelector('.btn-1');
btn1Click.onclick = () => {updateNum(1)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "1") {updateNum(1);}
});

//2
const btn2Click = document.querySelector('.btn-2');
btn2Click.onclick = () => {updateNum(2)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "2") {updateNum(2);}
});

//3
const btn3Click = document.querySelector('.btn-3');
btn3Click.onclick = () => {updateNum(3)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "3") {updateNum(3);}
});

//4
const btn4Click = document.querySelector('.btn-4');
btn4Click.onclick = () => {updateNum(4)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "4") {updateNum(4);}
});

//5
const btn5Click = document.querySelector('.btn-5');
btn5Click.onclick = () => {updateNum(5)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "5") {updateNum(5);}
});

//6
const btn6Click = document.querySelector('.btn-6');
btn6Click.onclick = () => {updateNum(6)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "6") {updateNum(6);}
});

//7
const btn7Click = document.querySelector('.btn-7');
btn7Click.onclick = () => {updateNum(7)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "7") {updateNum(7);}
});

//8
const btn8Click = document.querySelector('.btn-8');
btn8Click.onclick = () => {updateNum(8)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "8") {updateNum(8);}
});

//9
const btn9Click = document.querySelector('.btn-9');
btn9Click.onclick = () => {updateNum(9)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "9") {updateNum(9);}
});

//0
const btn0Click = document.querySelector('.btn-0');
btn0Click.onclick = () => {updateNum(0)}; 
document.addEventListener('keydown', (e) => {
    let keyCode = e.key;
    if(keyCode === "0") {updateNum(0);}
});