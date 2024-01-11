
console.log(`============================Step1=================================`);

const bankSbi = {
    bankName: "State Bank of India",
    accountNumber: 35624558,
    branchCode: 4512,
    branch: "Nagpur",

}
console.log(bankSbi);

console.log(`============================Step2=================================`);

const bankLocation = {
    street: "Ganesh Nagar",
    city: "Nagpur",
    pin: 441245

}
console.log(bankLocation);

console.log(`============================Step3=================================`);


const clonebankSbi = Object.assign({}, bankSbi)
console.log(` Clone of step 1 'bankSbi' : `);
console.log(clonebankSbi);

const clonebankLocation = Object.assign({}, bankLocation)
console.log(` Clone of step 2 'bankLocation' : `);
console.log(clonebankLocation);

console.log(`============================Step4=================================`);

console.log(`Rate of interest in percentage % `);
const rateOfInterest = {
    homeLoanInterest: 11.50,
    personalLoanInterest: 10.12,
    dueInterest: 13.02,

}
console.log(rateOfInterest);

console.log(`============================Step5=================================`);

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.log(`Merge of step1, step2 and step4 in table formate: `);
console.table(sbiDetails);


console.log(`============================Step6=================================`);

console.log(`Traverse using for in loop`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
        
    }
}
// console.log(sbiDetails);







