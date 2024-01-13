
console.log(`----------------------Factorial of string value-------------------------------`);

let factorialWordsCount = function (num){

    
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


}

let str = "Revision is the mother of success";
let result = str.split(" ");
console.log(`Given string is : '${str}' and its word count is: ${result.length} `);
let strResult = factorialWordsCount(`${result.length}`);
console.log(`Factorial of string is : ${strResult}`);
console.log(`                                        `);

let str2 = "We never fail, we always learn, Mind it";
let result2 = str2.split(" ");
console.log(`Given string is : '${str2}' and its word count is: ${result2.length} `);
let strResult2 = factorialWordsCount(`${result2.length}`);
console.log(`Factorial of string is : ${strResult2}`);
console.log(`                                        `);

let resultNull = factorialWordsCount(null);
console.log(`Factorial of Null value is : ${resultNull}`);
console.log(`                                        `);

let resultB = factorialWordsCount("");
console.log(`Factorial of "" value is : ${resultB}`);
console.log(`                                        `);

let str3 = "Priyanka Ramesh Pillewan";
let result3 = str3.split(" ");
console.log(`Given string is : '${str3}' and its word count is: ${result3.length} `);
let strResult3 = factorialWordsCount(`${result3.length}`);
console.log(`Factorial of string is : ${strResult3}`);
console.log(`                                        `);











