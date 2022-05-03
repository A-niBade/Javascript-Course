'use strict';

const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}

const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthyear, firstname) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement}`;
}
console.log(yearUntilRetirement(1991, "Jonas"));