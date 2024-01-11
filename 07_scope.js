

const country = "India"; // Variable declaration
let age; // Variable decl.
console.log(age);
age = 32;

var city;
city = 'Pune';
console.log(city);

//country = "Bharat";
console.log(country);

age = 34;
console.log(age);

// RE Declaration

// const country ="UK";   // we cannot redeclar variable

// let age = 40; 

var city = "Mumbai";

// Scope
if (true) {
    var n1 = 100;
    let n2 = 200;
    const n3 = 300;
}
console.log(n1, "Function scoped ");
// console.log(n2);   // block scoped
// console.log(n3);   // block scoped

function show( ) {
    for (let index = 0; index < 2; index++) {
     var s1 = "S1";
     let s2 = "S2";
     const s3 = "S3";
      
    }
    console.log(s1,"S1");
    //console.log(s2);
   // console.log(s3);
   
}
show( );





