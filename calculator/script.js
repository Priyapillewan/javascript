

const addButton = document.querySelector("#addition");
const fieldOne = document.querySelector("#fieldOne");
const fieldTwo = document.querySelector("#fieldTwo");

const resultValue = document.querySelector("#resultValue");

addButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const resultAdd = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
    resultValue.innerHTML = resultAdd;

 } ) 


const subButton = document.querySelector("#subtraction");

subButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const resultSub = valueOne - valueTwo;
    console.log(valueOne - valueTwo);
    resultValue.innerHTML = resultSub;

})

const mulButton = document.querySelector("#multiplication");

mulButton.addEventListener("click", () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const resultMul = valueOne * valueTwo;
    console.log(valueOne * valueTwo);
    resultValue.innerHTML = resultMul;

})


const divButton = document.querySelector("#division");

divButton.addEventListener("click", () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const resultDiv = valueOne / valueTwo;
    console.log(valueOne / valueTwo);
    resultValue.innerHTML = resultDiv;

})

const clearButton = document.querySelector("#clear");
const clearField = document.querySelectorAll("input");

clearButton.addEventListener("click", () => {
    clearField.forEach( (input) => (input.value = ""))
    resultValue.innerHTML = 0;

})





