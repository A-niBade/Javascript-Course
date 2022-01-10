"use strict";

const friend1 = "Amigo";
const friend2 = "Pana";
const friend3 = "Mismisimo";

const friends = ['Amigo', 'Pana', 'Mismisimo'];
const y = new Array(1991, 2009, 2010);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = 'Anibal';
const anibal = [firstName, 'Maldonado', 1997, friends];
console.log(anibal);

// EXERCISE
const calcAge = function(birthYear) {
    return 2021 - birthYear
}
const years = new Array(1991, 2009, 2010);
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);