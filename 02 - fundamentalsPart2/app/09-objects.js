const anibal = {
    firstName: "Anibal",
    lastName: "Maldonado",
    age: 2021 - 1997,
    job: "None",
    friends: ['Amigo', 'Pana', 'Pulento']
};
console.log(anibal);
console.log(anibal.lastName);
console.log(anibal['lastName']);

const nameKey = 'Name';
console.log(anibal['first' + nameKey]);
console.log(anibal['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Anibal? Choose between firstName, lastName, age, job, and friends');

// if(anibal[interestedIn]) {
//     console.log(anibal[interestedIn]);
// } else {
//     console.log('Wrong request');
// }

anibal.location = "Chile";
anibal['twitter'] = "Not Found";

// console.log(anibal.firstName + " has " + anibal.friends.length + ", and his best friend is called " + anibal.friends[1]);

console.log(`${anibal.firstName} has ${anibal.friends.length}, and his best friends is called ${anibal.friends[1]}`);

const jose = {
    firstName: "Anibal",
    lastName: "Maldonado",
    birthYear: 1997,
    job: "None",
    friends: ['Amigo', 'Pana', 'Pulento'],
    hasDriverLicense: true,

    // calcAge: function(birthYear) {
    //     return 2021 - birthYear
    // }
    // calcAge: function(birthYear) {
    //     return 2021 - this.birthYear
    // }

    calcAge: function() {
        this.age = 2021 - this.birthYear
        return this.age
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
    },
};

console.log(jose.calcAge());
console.log(jose.age);

// console.log(jose["calcAge"](1997));

console.log(jose.getSummary());