
console.log(`--------------------------Assignment 2-----------------------------------------------`);
function bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    console.log(`Bank Details is: ${bankName}, ${location}, ${ifscCode}, ${branchCode}`);


}
const yesBank = new bank("YES Bank", "Nagpur", "YESB0000028", "000028");
const sbiBank = new bank("SBI Bank", "Pune", "SBIB0000041", "000041");
const mahBank = new bank("Maharashtra Bank", "Kolhapur", "MAHB0000022", "000022");
const axisBank = new bank("AXIS Bank", "Nagpur", "AXSB0000052", "000052");

bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";

console.log(`------------------------------------------------------`);
console.log(`Open time of SBI Bank is: ${sbiBank.openTime} & Closed time is: ${sbiBank.closeTime}`);
console.log(`                                          `);
console.log(`Bank NAme is : ${axisBank.bankName} & Close time is : ${axisBank.closeTime}`);
console.log(`                                                      `);
console.log(`Bank Name is: ${yesBank.bankName} , Branch code is : ${yesBank.branchCode} & Open Time is: ${yesBank.openTime}`);




