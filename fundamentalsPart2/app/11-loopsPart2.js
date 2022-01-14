const anibalArray = [
    "Anibal",
    "Maldonado",
    1997,
    "Student",
    ['Amigo', 'Pana', 'Pulento'],
    "Yes"
];
const types = [];

for (let i = 0; i < anibalArray.length ; i++) {
    console.log(anibalArray[i], typeof anibalArray[i]);
    
    // types[i] = typeof anibalArray[i];
    types.push(typeof anibalArray[i])
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);

// CONTINUE AND BREAK
console.log("----- ONLY STRINGS ------");
for (let i = 0; i < anibalArray.length ; i++) {
    if(typeof anibalArray[i] !== 'string') continue;
    console.log(anibalArray[i], typeof anibalArray[i]);
}

console.log("----- BREAK WITH NUMBER ------");
for (let i = 0; i < anibalArray.length ; i++) {
    if(typeof anibalArray[i] === 'number') break;
    console.log(anibalArray[i], typeof anibalArray[i]);
}