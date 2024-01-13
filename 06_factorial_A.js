console.log(
  `--------------------------Factorial of a Number--------------------------------------`
);

let factorialOfNum = function (num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  if (num < 0) {
    return `Invalid Input That is Negative Number : ${num}`;
  }

  if (num == null || num == undefined || isNaN(num)) {
    return `Invalid Input`;
  }

  let result = 1;
  for (let index = 1; index <= num; index++) {
    result = result * index;
  }
  return result;
};
let result5 = factorialOfNum(5);
console.log(`Factorial of 5 is : ${result5}`);

let result3 = factorialOfNum(3);
console.log(`Factorial of 3 is : ${result3}`);

let resultNull = factorialOfNum(null);
console.log(`Factorial of Null value is : ${resultNull}`);

let result8 = factorialOfNum(8);
console.log(`Factorial of 8 is : ${result8}`);

let resultUnd = factorialOfNum(undefined);
console.log(`Factorial of Undefined Value is : ${resultUnd}`);

let result9 = factorialOfNum(9);
console.log(`Factorial of 9 is : ${result9}`);

let result0 = factorialOfNum(0);
console.log(`Factorial of 0 is : ${result0}`);





