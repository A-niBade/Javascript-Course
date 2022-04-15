juliaData = [3, 5, 2, 12, 7];
kateData = [9, 16, 6, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = [...dogsJulia];
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = [...dogsJuliaCorrected, ...dogsKate]
  dogs.forEach(function(age, i) {
    const adult = age > 5 ? 'is an Adult' : 'is still a Puppie'
    console.log(`Dog number ${i + 1} is ${age} years old and ${adult}`);
  })
};

checkDogs(juliaData, kateData);
