// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log('B737'[0]);
// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // FUNCTION TO FIX NAME
// const fixedUpperCase = function (name) {
//   const lowerName = name.toLowerCase();
//   const str = lowerName[0].toUpperCase() + lowerName.slice(1);
//   console.log(str);
// };

// fixedUpperCase('aNiBAL');

// FUNCTION TO COMPARE EMAILS

// const compareEmails = function (emailToFix, correctEmail) {
//   const email1 = emailToFix.toLowerCase().trim();
//   console.log(email1);

//   console.log(emailToFix === correctEmail);
// };

// compareEmails('ASDWDasdasd@gmail.com', 'ASDWDasdasd@gmail.com');

const airline = 'TAP Air Portugal';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

const passenger = 'aNiBAL';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@ani.io';
const loginEmail = '   Hello@Ani.IO  \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// REPLACING
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
