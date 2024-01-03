console.log(
  "==================================Step1========================================"
);
var isEvenOrOdd = function (num) {
  var returnValue = "";
  if (num % 2 == 0) {
    returnValue = "EVEN";
  } else {
    returnValue = "ODD";
  }
  return returnValue;
};

var result = isEvenOrOdd(45);
console.log(`Given number 45 is ${result}`);

var result = isEvenOrOdd(70);
console.log(`Given number 70 is ${result}`);

var result = isEvenOrOdd(67);
console.log(`Given number 67 is ${result}`);

var result = isEvenOrOdd(98);
console.log(`Given number 98 is ${result}`);

console.log(
  "==================================Step2========================================"
);

var isEligibleForVote = function (age) {
  if (age >= 18) {
    console.log(`Age ${age} : You are eligible for vote`);
  } else {
    console.log(`Age ${age} : You are not eligible for vote`);
  }
};
isEligibleForVote(18);
isEligibleForVote(20);
isEligibleForVote(17);
isEligibleForVote(40);

console.log(
  "==================================Step3========================================"
);

var stringChar = function (char) {
  console.log("Given String is:", char);
  var result = char.length;
  if (result >= 10) {
    console.log(`String has more than 10 character`);
  } else {
    console.log(`String has not more than 10 character`);
  }
};
stringChar("JavaScript-ES6");

console.log(
  "==================================Step4========================================"
);

var stringChar = function (char) {
  console.log("Given String is:", char);
  var isResult = char.includes("Java");
  if ((result = isResult)) {
    console.log(`String has starts with Java`);
  } else {
    console.log(`String has not start with Java`);
  }
};
stringChar("JavaScript Language");
stringChar("HTML Language");
