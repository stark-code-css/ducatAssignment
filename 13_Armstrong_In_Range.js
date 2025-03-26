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

function armstrongInRange(num1, num2) {
  let count = 0;
  for (let i = num1; i <= num2; i++) {
    if (isArmstrong(i)) {
      console.log(i);
      count++;
    }
  }
  if (count === 0) {
    console.log("No Armstrong Number Found");
  }
  console.log("Total Armstrong Numbers: ", count);
}

armstrongInRange(100, 1000);
