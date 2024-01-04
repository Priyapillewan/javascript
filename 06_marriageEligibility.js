
var marriageEligibility = function (gender, age) {
    if (age<=0 || age>100 || age==undefined ||isNaN(age)) {
        console.log(` Gender = ${gender}  Age = ${age} `);
        console.log(` ${age} is Invalid input`);

        
    } else {
        if (age>=21 && gender=="Male" || age>=18 && gender=="Female" ) {

            console.log(`Gender = ${gender}  Age = ${age} `);
            console.log(`You are Eligible for Marriage`);
            console.log(`                                         `);
            
        } else {
            console.log(`Gender = ${gender}  Age = ${age} `);
            console.log(`You are not Eligible for Marriage`);
            console.log(`                                          `);
        }
        
    }

    
}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);



