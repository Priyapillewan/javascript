

function square(num){

    console.log("Given value is:", num);
    var result = num*num;
    console.log("Result is: ", result);

}
square(9); //fuction call or innovation
square(10);
square(21);

console.log("=================step 2=======================");
function multiply(n1,n2,n3){
    console.log("Given numbers are: ", n1, n2, n3);
    var result = n1*n2*n3;
    return result;
}

var returnValue = multiply(5, 5, 5);
console.log("Multiplication is: ", returnValue);

var returnValue = multiply(10, 10, 10);
console.log("Multiplication is: ", returnValue);

console.log("=================step 3=======================");

function swap(n1, n2) {

    console.log("Before Swap=> ", "n1->", n1, "n2->", n2 );
    var temp= n1;
    n1 = n2;
    n2 = temp;
    console.log("After Swap=> ", "n1->", n1, "n2->", n2 );
    
}
swap( 100, 200);
swap("jenny", "merry");

