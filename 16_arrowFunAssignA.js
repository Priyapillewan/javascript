console.log(`*********************** Arrow Function ****************************************************`);
console.log(`                                                                           `);
console.log(`=============================Step1====================================`);

const show = () =>{
    console.log(`Good Morning, Today is Thursday`);
}
show();

console.log(`                                                                           `);
console.log(`=============================Step2====================================`);

const multiply = (n1, n2, n3=1) => {

    mul = n1 * n2 * n3;
    console.log(`Multiplication of three value is: ${mul}`);


}
multiply(5, 5, 2);
multiply(10,4);

console.log(`                                                                           `);
console.log(`=============================Step3====================================`);

const addition = (n1, n2, n3, n4, n5) => {

    return n1 + n2 + n3 + n4 + n5;

}
const returnResult = addition(100, 100, 200, 349, 756);
console.log(`Addition of number is: ${returnResult}`);

const returnResult1 = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition of number is: ${returnResult1}`);

console.log(`                                                                           `);





