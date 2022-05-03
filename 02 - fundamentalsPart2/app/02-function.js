'use strict';

function logger () {
    console.log('My name is Anibal');
}

logger();
logger();

function fruit(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruit (5, 0);
console.log(appleJuice); 

const appleOrangeJuice = fruit (10, 8);
console.log(appleOrangeJuice);