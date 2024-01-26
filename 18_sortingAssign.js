

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`Given array is : `);
console.log(arrayRollNumbers);
console.log(`                     `);
console.log(`========== 1. Reverse the array ===================================================`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`                     `);
console.log(`========== 2. Using sort() method ===================================================`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log(`                     `);
console.log(`========== 3. Array in assending order ===================================================`);
arrayRollNumbers.sort((a, b) => {
    return a>b ? 1 : -1;
});
console.log(arrayRollNumbers);

console.log(`                     `);
console.log(`========== 4. Greater number from array is : ===================================================`);
arrayRollNumbers.sort((a, b) => {
    return a>b ? -1 : 1;
});
console.log(arrayRollNumbers[0]);

console.log(`                     `);
console.log(`========== 5. Smallest number from array is : ===================================================`);
arrayRollNumbers.sort((a, b) => {
    return a>b ? 1 : -1;
});
console.log(arrayRollNumbers[0]);

console.log(`                     `);
console.log(`========== 6. Remove duplicate from array is : ===================================================`);

function duplicateElement(num){
    
    let element = [];
    
    for(let i of num) {
        if(element.indexOf(i) === -1) {
            element.push(i);
        }
    }
 
    console.log(element);
}

duplicateElement(arrayRollNumbers);





