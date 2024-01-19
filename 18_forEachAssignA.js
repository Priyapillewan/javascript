console.log(`******************Using foreach() with arrow function**********************************************`);

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given array is : ${arrayNumbers}`);
console.log(`======================Step 1=======================================================`);
arrayNumbers.forEach(( currentValue, index, array ) => {
    console.log(`Value is : ${currentValue}, Index is: ${index}`);
});

console.log(`======================Step 2=======================================================`);
console.log(`Positive numbers from given array is : `);
arrayNumbers.forEach(currentValue => {
    if (currentValue>=0) {
        console.log(currentValue);
    }
});

console.log(`======================Step 3=======================================================`);
console.log(`Negative numbers from given array is : `);
const negativeNum = [];
arrayNumbers.forEach(currentValue => {
    if (currentValue<0) {
        negativeNum.push(currentValue);
    }
});
console.log(negativeNum);

console.log(`======================Step 4=======================================================`);
console.log(`Even numbers from array is: `);
arrayNumbers.forEach(currentValue => {
    if (currentValue%2==0) {
        console.log(currentValue);
    }
});

console.log(`======================Step 5=======================================================`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
     sum = sum + arrayNumbers[index];    
}
console.log(`Sum of all numbers in array: ${sum}`);


console.log(`======================Step 6=======================================================`);

console.log(`Even index array value is: `);
arrayNumbers.forEach(( currentValue, index, array ) => {
    if (index%2==0) {
        console.log(index, currentValue);
    }
    
});


