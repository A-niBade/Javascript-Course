'use strict';

// const calcAverage = (a, b, c) => {
//     const avgScore = (a + b + c) / 3;
//     return avgScore;
// }

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins1 = (calcAverage(44, 23, 71));
const scoreDolphins2 = (calcAverage(65, 54, 29));
const scoreKoalas1 = (calcAverage(85, 54, 41));
const scoreKoalas2 = (calcAverage(23, 34, 27));

const checkWinner = function(avgKoala, avgDolphins) {
    if (avgKoala >= 2 * avgDolphins) {
        console.log(`Koalas wins ${avgKoala} vs ${avgDolphins}`);
    } else if (avgDolphins >= 2 * avgKoala) {
        console.log(`Koalas wins ${avgKoala} vs ${avgDolphins}`);
    } else {
        console.log("Nobody wins!");
    }
}

console.log(scoreDolphins1, scoreKoalas1);

const winner = checkWinner(scoreDolphins1, scoreKoalas1);
const winner2 = checkWinner(scoreDolphins2, scoreKoalas2);