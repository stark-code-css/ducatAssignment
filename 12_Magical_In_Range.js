function sumOfDigits(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function reverseNumber(num) {
  let rev = 0;
  while (num) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}

function isMagical(num) {
  let sum = sumOfDigits(num);
  let rev = reverseNumber(sum);

  return sum * rev === num;
}

function magicalInRange(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (isMagical(i)) {
      console.log(i);
      count++;
    }
  }
  console.log(`Total magical numbers between ${start} and ${end} are ${count}`);
}

magicalInRange(1, 1000);
