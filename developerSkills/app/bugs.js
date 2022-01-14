const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());