function isPrimeNumber() {
  let number = 5;
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (number > 1 && isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is not a prime number`);
  }
}

isPrimeNumber();
