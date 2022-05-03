"use strict";

// ADD ELEMENTS
const friends = ['Amigo', 'Pana', 'Mismisimo'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// REMOVE ELEMENTS
friends.pop(); // LAST
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift('John'); // First
console.log(friends);

console.log(friends.indexOf('Amigo'));
console.log(friends.indexOf('No está')); // -1

// OTHERS
console.log(friends.includes('Amigo')); 

if (friends.includes('Amigo')) {
    console.log("Encontrado");
}
