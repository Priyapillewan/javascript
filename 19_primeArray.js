

const arrayNums = [21, 11, 40, 25, 9, 61, 50];
const arraPrime = [];
for (const element of arrayNums) {
    if (isPrime(element)) {
        arraPrime.push(element);
    }
}
console.log(arraPrime);
console.log(arraPrime.length);

function isPrime(num) {
    for(let index = 2; index< num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}