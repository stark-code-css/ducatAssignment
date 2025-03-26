function isNeonNumber(num) {
  var square = num * num;
  var sum = 0;
  while (square > 0) {
    sum += square % 10;
    square = Math.floor(square / 10);
  }

  sum === num
    ? console.log(`${num} is Neon Number`)
    : console.log(`${num} is not Neon Number`);
}

isNeonNumber(9);
