const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Anibal');
greeterHey('José');

greet('Hello')('Anibal');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hola')('Anibal');
