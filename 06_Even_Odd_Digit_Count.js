function evenOddDigitCount(num) {
  let originalNum = num;
  let even = 0;
  let odd = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 == 0) {
      even++;
    } else {
      odd++;
    }
    num = Math.floor(num / 10);
  }
  console.log(`The count of even digits in ${originalNum} is ${even}`);
  console.log(`The count of odd digits in ${originalNum} is ${odd}`);
}

evenOddDigitCount(12345);
