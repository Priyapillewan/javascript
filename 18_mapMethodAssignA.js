const arraynumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array is: `);
console.log(arraynumbers);
console.log(
  `                                                                             `
);

console.log(
  `=====================Step1==============================================`
);
const arrayAdd = arraynumbers.map((currentValue) => {
  return currentValue + 10;
});
console.log(`Result for adding 10 to each element: `);
console.log(arrayAdd);

console.log(
  `                                                                             `
);
console.log(
  `=====================Step2==============================================`
);

const arrayCube = arraynumbers.map((currentValue) => {
  return currentValue * currentValue * currentValue;
});
console.log(`Result for cube of each element: `);
console.log(arrayCube);

console.log(
  `                                                                             `
);

console.log(
  `=====================Step3==============================================`
);

const arrayAddIndex = arraynumbers.map((currentValue, index) => {
  return currentValue + index;
});
console.log(`Result for adding index to each element of array: `);
console.log(arrayAddIndex);
