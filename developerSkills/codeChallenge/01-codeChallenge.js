temps1 = [17, 21, 23];
temps2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
  let str = '';
  for(i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days... `
  }
  console.log(str);
}

printForecast(temps1);
printForecast(temps2);

