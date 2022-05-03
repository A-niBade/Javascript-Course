// 5 FALSY VALUES: 0, '', undefinde, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Anibal'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spent it all");
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log("Height is definded");
} else {
    console.log("Height is not defined");
}