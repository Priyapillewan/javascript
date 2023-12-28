console.log("========================Step1============================");
function myName() {
    console.log("Functions with no arguments and no return type");
}
myName();

console.log("========================Step2============================");

function personalDetails( firstName, lastName, collageName ){
    console.log(" First Name: ", firstName);
    console.log(" Last Name: ", lastName);
    console.log(" College Name: ", collageName);
}
personalDetails( "Priyanka" , "Pillewan" , "SRMCEW");

console.log("========================Step3============================");
function swapValues(arg1, arg2){
    console.log("Before Swap : ");
    console.log(" Value 1 : ", arg1);
    console.log(" Value 2 : ", arg2);

    temp = arg1;
    arg1 = arg2;
    arg2 = temp;

    console.log("After Swap : ");
    console.log(" Value 1 : ", arg1);
    console.log(" Value 2 : ", arg2);

}
swapValues( "Virat", "Anushka" );
console.log("                                        ");
swapValues( 1000, 2000);


console.log("========================Step4============================");

function addThreeValues( arg1, arg2, arg3 ){
    console.log("Three Values are: ", arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3 ;
    return result;
}

var returnValue = addThreeValues( 10.23, 600, 40);
console.log("Addition of three values: ", returnValue);

console.log("                                        ");

var returnValue = addThreeValues( "Hello", "Good", "Morning");
console.log("Addition of three values: ", returnValue);


console.log("---------------------------------------------------");