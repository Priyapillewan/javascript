

// program to remove duplicate value from an array
console.log(`=========================Step 1 : Remove duplicate element from array=================================================`);

function duplicateElement(num){
    
    let element = [];
    
    // loop through array
    for(let i of num) {
        if(element.indexOf(i) === -1) {
            element.push(i);
        }
    }
    console.log(`After removing duplicate element Array is: ${element}`);
}

const arrayNum = [11, 3, 4, 11, 4, 7, 3];
console.log(`Given Array is : ${arrayNum}`);
duplicateElement(arrayNum);




// const getUniqueArray = (arr) =>  {
//     var result = [];
//     for (var i=0, l=arr.length; i<l; i++)
//         if (result.indexOf(arr[i]) === -1 && arr[i] !== '')
//             result.push(arr[i]);
//     return result;
// }

// console.log(getUniqueArray([1, 2, 3, 3, 2, 2, 2, 1]))


console.log(`                                                                                                                  `);
console.log(`=================Step 2 : Capitalize the first and last character of each word in a string=================================================`);


function CapitalizeFL(str) {
    var spl = str.split(" "); 
    var words = [];
    for (let i = 0; i < spl.length; i++) {
      //For every word
      for (let j = 0; j < spl[i].length; j++) {
        //For every letter in each word
        var word = spl[i];
        var size = spl[i].length;
        var firstLetterCapital = word.replace(word[0], word[0].toUpperCase()); //Creates new array
        var LastLetterCapital = firstLetterCapital.replace(
          word[size - 1],
          word[size - 1].toUpperCase()
        );
      }
      words.push(LastLetterCapital);
      
    }
    console.log(`Output string: ${words.join(" ")}`);
      
  }
  
  const givenStr = "How are you mate";
  console.log(`Given string is : ${givenStr}`);
  CapitalizeFL(givenStr);















