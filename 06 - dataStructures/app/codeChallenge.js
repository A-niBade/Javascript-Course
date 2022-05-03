'use strict';

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // CODE CHALLENGE 1

// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// const [gk, fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [players1, 'Thiago', 'Couthino', 'Perisic'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more lokely to win');
// team1 > team2 && console.log('Team 2 is more lokely to win');

// // CODE CHALLENGE 2
// // 1

// const goals = [...game.scored];
// for (const [goal, player] of goals.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }

// // 2
// const odds = Object.values(game.odds);
// let avg = 0;
// for (const odd of odds) avg += odd;
// avg /= odds.length;
// console.log(avg);

// // 3

// const test = Object.entries(game.odds);

// for (const [team, odd] of test) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Ood of ${teamStr}: ${odd}`);
// }

// CODE CHALLENGE 3
// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const [keys, values] of gameEvents) {
//   const half = keys <= 45 ? 'First' : 'Second'
//   console.log(`${[half]} ${keys}, ${values}`);
// }

// CODE CHALLENGE 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const str = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${str.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});
