'use strict';
const flight = 'LH234';
const anibal = {
  name: 'Anibal Maldonado',
  passport: 123545654,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 123545654) {
    alert('Check IN');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, anibal);
console.log(flight);
console.log(anibal);

const flightNum = flight;
const passenger = anibal;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(anibal);
checkIn(flight, anibal);
