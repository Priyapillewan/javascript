console.log("==================================Step1=======================================");
function squareOfWordLength( word1 ){

   var len = word1.length;
   var result = len *len;
   console.log(`Given Word is: ${word1}`);
   console.log(`Given word length is : ${len} & Given word length square is: ${result}` );


}
squareOfWordLength( "JavaScript");
console.log("--------------------------------------------------------------------");
squareOfWordLength( "Google Chrome");
console.log("--------------------------------------------------------------------");
squareOfWordLength( "Developer Smart");

console.log("==================================Step2=======================================");

function noArgNovalue(){

var givenString = "I am Angular Developer";
console.log(`Given String is: ${givenString}`);

var strLength = givenString.length;
console.log(`Given string length is : ${strLength}`);

var numOfWord = givenString.split(" ");
console.log(`Number of word in string is : ${numOfWord.length}`);

var divResult = strLength / numOfWord.length;

console.log(`String length divided by number of word in string is = ${divResult}`);

var mulResult = strLength * numOfWord.length ;
console.log(`Multiplication of string length and word in string is = ${mulResult}`);
    
}
noArgNovalue();
