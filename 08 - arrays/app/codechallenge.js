// 1

// juliaData = [3, 5, 2, 12, 7];
// kateData = [9, 16, 6, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = [...dogsJulia];
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = [...dogsJuliaCorrected, ...dogsKate]
//   dogs.forEach(function(age, i) {
//     const adult = age > 5 ? 'is an Adult' : 'is still a Puppie'
//     console.log(`Dog number ${i + 1} is ${age} years old and ${adult}`);
//   })
// };

// checkDogs(juliaData, kateData);

// 2
// const calcAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);

//   const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return avg
// };

// const avg1 = calcAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAge([16, 6, 10, 5, 6, 1, 4])

// console.log(avg1);
// console.log(avg2);

// 3
// const calcAvg = ages =>
// ages
//   .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//   .filter(age => age >= 18)
//   .reduce((acc, age, i ,arr) => acc + age / arr.length, 0)

// const avg1 = calcAvg([5, 2, 4, 1, 15, 8, 3])
// const avg2 = calcAvg([16, 6, 10, 5, 6, 1, 4])
// console.log(avg1);
// console.log(avg2);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3
const dogEatMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(dogEatMuch);

const dogEatLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(dogEatLittle);

// 4
console.log(`${dogEatMuch.join(' and ')}'s eat to much`);
console.log(`${dogEatLittle.join(' and ')}'s eat to little`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6
const checkEat = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEat));

// 7
console.log(dogs.filter(checkEat));

// 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
