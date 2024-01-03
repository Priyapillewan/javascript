console.log("============================Step1=====================================");
function greaterNumber(arg1, arg2) {

      console.log(`Given numbers are ${arg1}, ${arg2}`);
      
      if (arg1>=arg2) {
        console.log(`The greater number is: ${arg1}`);
      }
      else{
        console.log(`The greater number is: ${arg2}`);
      }
      
      //var result = arg1>=arg2;
     // console.log(`Greater number is : ${result}`);

}
greaterNumber(10, -10);
greaterNumber(800, 899);


console.log("============================Step2=====================================");

function isEvenOrOddNumber(arg1) {
    if (arg1 % 2 == 0) {
        console.log(`Given number is: ${arg1} and its Even number`);
    } else {
        console.log(`Given number is: ${arg1} and its Odd number`);
        
    }
    
}
isEvenOrOddNumber(29);
isEvenOrOddNumber(44);
isEvenOrOddNumber(0);
isEvenOrOddNumber(101);

console.log("============================Step3=====================================");

function wordLength(arg1) {

    len = arg1.length;

    if (arg1.length % 2 == 0) {

        console.log(`The length of the given string '${arg1}' is ${len} and its Even. `);
        
    } else {

        console.log(`The length of the given string '${arg1}' is ${len} and its Odd. `);
        
    }
    
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");






