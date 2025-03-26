function checkPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum === num) {
    return true;
  }
  return false;
}

function perfectNumberInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (checkPerfectNumber(i)) {
      console.log(i);
    }
  }
}

perfectNumberInRange(1, 1000);
