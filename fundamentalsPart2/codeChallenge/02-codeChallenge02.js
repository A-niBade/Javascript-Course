const calcTip = (a) => {
    if (a >= 50 && a <= 300) {
        return a * .15;    
    } else {
        return a * .2
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

console.table(total);

