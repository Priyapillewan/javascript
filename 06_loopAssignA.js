console.log(`=====================================Step 1=================================================`);
let s1 = "I am very good IT Developer";
let vowelsCount = 0;
for (let index = 0; index < s1.length; index++) {
   let char = s1.charAt(index).toLowerCase();
   if (char == 'a' || char == "e" || char == "i"|| char == "o" || char == "u") {
    vowelsCount = vowelsCount + 1;
    
   }
    
}
console.log(`Given string is : ${s1}`);
console.log(`Vowels count is : ${vowelsCount}`);

console.log(`=====================================Step 2=================================================`);

function sumOfCubes() {
    let sum = 0;

    for (let index = 1; index <= 5; index++) {
        
       sum = sum + index * index * index;

          
    
    }
    console.log(`Sum of cube numbers from 1-5 is :${sum}`);
    
}
sumOfCubes();

console.log(`=====================================Step 3=================================================`);

function oddPositionedChars(str) {
    console.log(`Given string is : ${str} -- & Its odd positioned characters are: `);
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (index%2==1 && char!=" ") {
            console.log(str.charAt(index));
           
            
        }
        
    }
    
 }

 oddPositionedChars("Hard work always pays back" );
 oddPositionedChars("Soon I will be UI IT Champ" );

