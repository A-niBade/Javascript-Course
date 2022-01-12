const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const mark = {
    firstName: "Mark",
    lastName: "Smith",
    height: 1.69,
    mass: 78,

    calcBMI: function() {
        bmi = this.mass / (this.height ** 2);
        return bmi
    }
}

const john = {
    firstName: "John",
    lastName: "Miller",
    height: 1.95,
    mass: 92,

    calcBMI: function() {
        bmi = this.mass / (this.height ** 2);
        return bmi
    }
}

if (john.calcBMI > mark.calcBMI) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.calcBMI()})`);
} else {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()})`);
}