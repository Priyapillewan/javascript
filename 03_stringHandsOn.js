
function stringHandsOn(){
var givenString = "    Hey you are doing good, keep it up   ";

console.log(`1) Given string is :- ${givenString}`);

console.log("-----------------------------------------------------------------------------------");

var result = givenString.length;
console.log(`2) Given string length is :- ${result}`);
console.log("-----------------------------------------------------------------------------------");

var trimResult = givenString.trim();
console.log(`3) After trim given string is :- ${trimResult}; And it's length is: ${trimResult.length}`);
console.log("-----------------------------------------------------------------------------------");

var extraSpace = result - trimResult.length;
console.log(`4) Total number of extra space is : ${extraSpace}`);
console.log("-----------------------------------------------------------------------------------");

var charAtIndex0 = trimResult.charAt(0);
var lastChar = trimResult.charAt( trimResult.length-1);
console.log(`5) First character after trim is :- ${charAtIndex0} and Last character after trim is :- ${lastChar}`);
console.log("-----------------------------------------------------------------------------------");

var totalCharAfterTrim = trimResult.length;
console.log(`6) Total word available after trim in string :- ${totalCharAfterTrim}`);
console.log("-----------------------------------------------------------------------------------");

var indexOfGood = trimResult.indexOf('good');
console.log(`7) Index of good is :- ${indexOfGood}`);
console.log("-----------------------------------------------------------------------------------");

var substringResult = trimResult.substring(22);
var sliceResult = trimResult.slice(22);
console.log(`8) Substring result is :- ${substringResult}, And Slice result is :- ${sliceResult}`);
console.log("-----------------------------------------------------------------------------------");

var isAvailable = trimResult.includes("up");
console.log(`9) Is string ends with word "up" :- ${isAvailable}`);
console.log("-----------------------------------------------------------------------------------");

var isAvailableStart = trimResult.includes("Hey");
console.log(`10) Is string starts with word "up" :- ${isAvailableStart}`);
console.log("-----------------------------------------------------------------------------------");


}
stringHandsOn();







