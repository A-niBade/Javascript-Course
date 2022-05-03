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

lufthansa.book(239, 'Anibal');
lufthansa.book(634, 'Smith');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

book.call(eurowings, 23, 'Jose');
book.call(lufthansa, 329, 'Mary');

const flightData = [45, 'Cooper'];
book.apply(eurowings, flightData);

book.call(lufthansa, ...flightData);
