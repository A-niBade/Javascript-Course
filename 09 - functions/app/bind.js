const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
const book = lufthansa.book;

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Anibal');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Matias');

// EVENT LISTENER
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// PARTIAL APLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addIVA = addTax.bind(null, 0.19);

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addIVA2 = addTaxRate(0.19);
