function isPrimeNumber(num) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

function primeInRange(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i > 1 && isPrimeNumber(i)) {
      count++;
      console.log(i);
    }
  }

  console.log(`Total Prime Numbers between ${start} and ${end}: ${count}`);
}

primeInRange(1, 20);
