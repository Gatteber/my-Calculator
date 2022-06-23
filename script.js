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


function operate (array1Index, array2Index) {
    console.log(operation(array1Index, array2Index));
}

const addOperation = function addOperation (a, b) {
    return a + b;
}

let operation = null;
operation = addOperation;
let calculatorStorage = [];
calculatorStorage.push(10);
calculatorStorage.push(10);
console.log(calculatorStorage);
operate(calculatorStorage[0], calculatorStorage[1]);





//general selectors
const displayUpdate = document.querySelector('.numbers');

//number/operator functions
function updateNum (num) {
//    console.log(displayUpdate.innerHTML.length);
    if (displayUpdate.innerHTML.length < 20) {
        displayUpdate.innerHTML += num;
    } else {
        console.log("error, too many numbers");
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




