function reverseNumber(num) {
  let originalNum = num;
  let reverse = 0;
  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(`Reverse of ${originalNum} is ${reverse}`);
}

reverseNumber(12345);
