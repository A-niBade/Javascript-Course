// for(let rep = 1;rep <= 10; rep++) {
//     console.log(`Lifting rep ${rep}`);
// }

rep = 1;
while (rep <= 10) {
    console.log(`Lifting rep ${rep} 🏋️`);
    rep++;
}
console.log("--------------------------");
let dice = Math.trunc(Math.random() * 6) + 1

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop is about to end.....");
}

