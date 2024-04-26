//* Question 1: Sum of all natural numbers from 1 to n
// function sumOfNaturalNumber(num){
//     let sum = 0;
//     for(let i=1; i<=num; i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(sumOfNaturalNumber(5)); // 15
// console.log(sumOfNaturalNumber(10)); // 55
// console.log(sumOfNaturalNumber(8)); // 36

//? *******Or*(math formula)*******

// function sumOfNaturalNumber(num) {
//   return (num * (num + 1)) / 2;
// }

// console.log(sumOfNaturalNumber(5)); // 15

//* Question 2: Sum of digits of a number
//? when we don't know the number of step to be execute while loop used
// function sumOfDigits(num) {
//   let sum = 0;

//   while (num > 0) {
//       sum = sum + (num % 10);
//     //   sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   return sum;
// }

// console.log(sumOfDigits(1290)); // 3

//? ************Or ***********

// function sumOfDigits(num) {
//   let sum = 0;
//   let numStr = num.toString();
//   for (let i of numStr) {
//     sum = sum + parseInt(i);
//   }

//   return sum;
// }

// console.log(sumOfDigits(1239)); //15

//*Question 3: Count the number of digits of a number */
//? do wile loop is used when we need to run program atleast once

// function countDigits(num) {
//   num = Math.abs(num);
//   let count = 0;
//     do {
//       count++;
//       num = Math.floor(num / 10);
//     } while (num > 0);

//   return count;
// }

// console.log(countDigits(121)); // 3
// console.log(countDigits(-113)); // 3
// console.log(countDigits(0)); // 1

//? *********Or***********

// function countDigits1(num) {
//   num = Math.abs(num);
//   let numStr = num.toString();
//   return numStr.length;
// }

// console.log(countDigits1(121)); // 3
// console.log(countDigits1(-121)); // 3

//*Question 4: Check if a number is palindrome
let isPalindrome = function(x) {
    x = Math.abs(x)
    let copyNum = x, reverseNum = 0;

    while(copyNum > 0){
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    return x === reverseNum;
};

console.log(isPalindrome(-121)); // true
console.log(isPalindrome(1234)); // false




