"use strict";

const temps1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// AMPLITUDE
// SENSOR ERROR
// console.log(Math.max(temperatures));
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  return max - min;
};

const amp = calcTempAmplitude(temps1);
console.log(amp);

// MERGE 2 ARRAYS
const temp2 = [3, 45, 6, 65, 23, 123];
const temp3 = [...temps1, ...temp2];

const amp2 = calcTempAmplitude(temp3);
console.log(amp2);
