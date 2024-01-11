

function reverseString(str) {
    let result = " ";
    for (let index = str.length-1; index >=0; index--) {

        let char = str.charAt(index);
       
        if (char!=" ") {
            result = result + str.charAt(index);
        }
        
    }
    console.log(`Given string is : ${str}`);
      console.log(`Reverse string is : ${result}`);

}

reverseString("Hard work always pays back");
console.log(`                                 `);
reverseString("Soon I will be Angular IT Champ");


