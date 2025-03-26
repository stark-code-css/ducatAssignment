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

let num = 1729;
isMagical(num)
  ? console.log(`${num} is a magical number`)
  : console.log(`${num} is not a magical number`);
