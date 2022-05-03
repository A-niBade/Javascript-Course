const age = '18';
if (age === 18) console.log('You just became an adult (Strict)');
if (age == 18) console.log('You just became an adult (Loose)');

const favourite = Number(prompt("What is your favourite number?"));
console.log(typeof favourite);

if (favourite === 23) {
    console.log('23 is a cool number');
} else if (favourite === 7) {
    console.log('7 is cool number too');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');