

var interviewEligibility = function ( gradScore, hscScore, sscScore, candidateName ){

    if (sscScore<=0 || sscScore>100 || sscScore==undefined ||isNaN(sscScore)) {

        console.log(`Invalid input`);
        
    } else {
        if (gradScore >= 70 || hscScore >= 80 || sscScore >=90) {

            console.log(` Hey, ${candidateName} you are eligible for TCS interview.`);
            
        } else {

            console.log(` Unfortunately you are not eligible for interview.`);
            
        }
        
    }

}
interviewEligibility(80, 86, 90, "Priyanka" );
interviewEligibility(70, 65, 55, "Neha" );
interviewEligibility(60, 79, 88, "Priti" );
