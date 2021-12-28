// There are two gymnastics teams, Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console.Don't forget that there can be a draw, so test for that as well(draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.Hint: Use a logical operator to test for minimum score, as well as multiple else -if blocks

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dAvgScore = (96 + 108 + 89) / 3;
const kAvgScore = (88 + 91 + 110) / 3;
const pointsToWin = 100;

if (dAvgScore > kAvgScore) {
    console.log("Dolphin's score is higher");
} else if (dAvgScore < kAvgScore) {
    console.log("Koala's score is higher");
} else {
    console.log("DRAW");
}


// BONUS 1
const dAvgScoreBonus1 = (97 + 112 + 101) / 3;
const kAvgScoreBonus1 = (109 + 95 + 123) / 3;

if (dAvgScoreBonus1 > kAvgScore && dAvgScoreBonus1 >= pointsToWin) {
    console.log("Dolphin's score is higher");
} else if (dAvgScore < kAvgScore && kAvgScoreBonus1 >= pointsToWin) {
    console.log("Koala's score is higher");
} else {
    console.log("DRAW");
}

// BONUS 2
const dAvgScoreBonus2 = (97 + 112 + 81) / 3;
const kAvgScoreBonus2 = (109 + 95 + 86) / 3;
console.log(kAvgScoreBonus2, kAvgScoreBonus2);

if (dAvgScoreBonus2 > kAvgScoreBonus2 && dAvgScoreBonus2 >= pointsToWin) {
    console.log("Dolphin's score is higher");
} else if (dAvgScoreBonus2 < kAvgScoreBonus2 && kAvgScoreBonus2 >= pointsToWin) {
    console.log("Koala's score is higher");
} else if (dAvgScoreBonus2 === kAvgScoreBonus2 && kAvgScoreBonus2 >= pointsToWin && dAvgScoreBonus2 >= pointsToWin) {
    console.log("DRAW");
} else {
    console.log("No one wins the trophy");
}

