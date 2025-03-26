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

let num = 121;
isPalindrome(num)
  ? console.log(`${num} is Palindrome`)
  : console.log(`${num} is not Palindrome`);
