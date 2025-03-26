function isPalindrome(num) {
  let originalNum = num;
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  return originalNum === reverse;
}

function palindromeInRange(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (isPalindrome(i)) {
      count++;
      console.log(i);
    }
  }
  console.log(`Total Palindromes between ${start}  ${end}: ${count}`);
}

palindromeInRange(100, 200);
