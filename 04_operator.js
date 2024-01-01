var a = 10;
var b = a++;
console.log("b=", b); //postfix

var c = 20;
var d = ++c;
console.log("d=", c); //prefix

//
// var e=100;
// var f=100--;
// console.log("f=", f);

var result = 0 / 0;
console.log(result);

var result = 100 + true;
console.log(result);

var resultVaue = 99 - false; // false=0--- implicite conversion
console.log(resultVaue);

console.log("1"+"1"); // concate

var s1="101";
console.log(typeof s1);

var s2 = +s1;
console.log(s2);
console.log( typeof s2);

var d = + "200";
console.log(d);
console.log(typeof d);

var z = +"Priyanka";
console.log(z);

var d = Number("100");
console.log(typeof d);

var s1= "200";
var res = Number(s1);
console.log(typeof res);

var s1= "200A";
var res = Number(s1);
console.log(typeof res);
console.log(res);

var a1;
console.log(a1);
console.log(typeof a1);

var p = Boolean(10);
console.log(p);

var p = Boolean(0);
console.log(p);



