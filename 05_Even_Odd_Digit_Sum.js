function EvenOddDigitSum(num) {
  let originalNum = num;
  let evenSum = 0;
  let oddSum = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
    num = Math.floor(num / 10);
  }
  console.log(`The sum of even digits in ${originalNum}: ${evenSum}`);
  console.log(`The sum of odd digits in ${originalNum}: ${oddSum}`);
}

EvenOddDigitSum(12345);
