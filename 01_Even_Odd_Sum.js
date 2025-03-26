function OddEvenSum() {
  let startRange = 0;
  let endRange = 10;

  let sumOfOdds = 0;
  let sumOfEvens = 0;

  for (let i = startRange; i <= endRange; i++) {
    if (i % 2 == 0) {
      sumOfEvens += i;
    } else {
      sumOfOdds += i;
    }
  }

  console.log(
    `Sum of odd numbers between ${startRange} & ${endRange}: ${sumOfOdds}`
  );
  console.log(
    `Sum of even numbers between ${startRange} & ${endRange}: ${sumOfEvens}`
  );
}

OddEvenSum();
