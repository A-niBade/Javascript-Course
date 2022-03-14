'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

console.log('--------------------');

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // ARRAYS
// // const users = [{ name: 'Jonas', email: 'Hello@jonas.io' }];
// const users = [];
// console.log(users[0]?.name ?? 'User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name: 'Capri',
//   numGuest: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numberGuests = rest1.numGuest || 10;
// // rest2.numberGuests = rest2.numGuest || 10;

// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;

// rest2.numGuest ??= 10;
// rest2.numGuest ??= 10;

// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;
// console.log(guest);

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// console.log(3 || 'Anibal');
// console.log('' || 'Anibal');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;

// const guess1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guess1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);
// console.log('---------------------------');

// console.log(0 && 'Anibal');
// console.log(2 && 'Anibal');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');
// // DESTRUCTURING

// // SPREAD ON RIGHT SIDE OF =
// const arr = [1, 2, ...[3, 4]];

// // REST ON LEFT SIDE OF =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, ...others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // OBJ
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 5);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];

// // JOIN 2 ARRAYS
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // ITERABLES
// const str = 'Anibal';
// const letters = [...str, ' ', 'M.'];
// console.log(letters);
// console.log(str);

// const ingredients = [
//   prompt("Let's make pasta! Ingridient 1?"),
//   prompt("Let's make pasta! Ingridient 2?"),
//   prompt("Let's make pasta! Ingridient 3?"),
// ];
// restaurant.orderPasta(...ingredients);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // DEFAULT VALUES
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // MUTATING
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // NESTED OBJ
// const {
//   fri: { open, close },
// } = hours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [, , thrid] = restaurant.categories;
// console.log(thrid);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
