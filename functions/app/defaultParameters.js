'use strict';

// DEFAULT PARAMETERS

const bookingArr = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingArr.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
