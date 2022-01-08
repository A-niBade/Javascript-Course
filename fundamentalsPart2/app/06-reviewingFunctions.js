'use strict';

const calcAge = function(birthyear){
    return 2037 - birthyear
}

const yearUntilRetirement = function (birthyear, firstname){
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if(retirement > 0){
        return retirement;
    } else {
        return `${firstname} has already retired`;
    }
}

console.log(yearUntilRetirement(1997, 'Anibal'));