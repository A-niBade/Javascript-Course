'use strict';

// DECLARATION
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);

// EXPRESSION
const calcAge2 = function (birthyear) {
    return 2037 - birthyear
}
const age2 = calcAge2(1991);
console.log(age1, age2);