function numberOfDigits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

function isArmstrong(num) {
  let originalNum = num;
  let sum = 0;
  let n = numberOfDigits(num);
  while (num > 0) {
    let rem = num % 10;
    sum += Math.pow(rem, n);
    num = Math.floor(num / 10);
  }

  return sum === originalNum;
}

let num = 153;

isArmstrong(num)
  ? console.log(`${num} is an Armstrong Number`)
  : console.log(`${num} is not an Armstrong Number`);
