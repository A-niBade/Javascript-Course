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