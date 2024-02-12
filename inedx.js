// 1. Problem: Print Numbers from 1 to n
//  Write a program that takes an input n from the user and prints all the numbers from 1 to n on separate lines.

// var n = 10;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// Write a function that takes two numbers as arguments and returns their sum.

// function sumFunc(a, b) {
//   return a + b;
// }
// console.log(sumFunc(5, 3));

// Write a function that takes two numbers as arguments and returns their product.

// function multipy(a, b) {
//   var product = a * b;
//   return product;
// }

// var result = multipy(5, 5);
// console.log(result);

//4. Write a function that takes a number as an argument and returns whether it's even or odd.

// function findOddNumber(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// console.log(findOddNumber(11));

//5.Write a function that takes a string as input and returns the reverse of that string.

// function reverseString(string) {
//   return string.split("").reverse().join();
// }

// console.log(reverseString("Jamshid"));

// Write a function that checks whether a given string is a palindrome.

// function isPalindrome(str) {
// Convert the input string to lowercase and remove non-alphanumeric characters
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

// Initialize pointers for comparing characters
//   let left = 0;
//   let right = str.length - 1;

// Iterate through the string until the pointers meet or cross each other
//   while (left < right) {
// If characters at the current positions don't match, return false
//     if (str[left] !== str[right]) {
//       return false;
//     }
// Move the pointers towards the center of the string
//     left++;
//     right--;
//   }
// If all characters match, return true (string is a palindrome)
//   return true;
// }

// console.log(isPalindrome("eyev"));
const items = [
  { name: "home", price: 50 },
  { name: "book", price: 10 },
  { name: "tv", price: 450 },
  { name: "phone", price: 500 },
  { name: "tv", price: 100 },
];

// const findItem = items.filter((item) => {
//   return item.name === "book";
// });

// console.log(findItem);

// const findItem1 = items.filter((item) => {
//   return item.price <= 100;
// });

// console.log(findItem1);

// const mapItems = items.map((item) => {
//   return item.price;
// });

// console.log(mapItems);

// const mapItems = items.find((item) => {
//   return item.price === 50;
// });

// console.log(mapItems);

// items.forEach((item) => {
//   console.log(item.price);
// });

// const findItems = items.some((item) => {
//   return item.price <= 100;
// });

// console.log(findItems);

// const numbers = [2, 4, 6, 8];
// const doubleNumber = numbers.map((number) => {
//   return console.log(number * 2);
// });

// doubleNumber;

// const total = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal;
// }, 0);

// console.log(total);

// const numbers = [22, 33, 5, 78, 100];
// const findMaxNumber = numbers.reduce((number, current) => {
//   return current > number ? current : number;
// });

// console.log(findMaxNumber);

// Filter strings by length:
//  Write a function that takes an array of strings and a number length as input
//  and returns a new array containing only the strings with length greater than length using the filter method.

const strings = ["banana", "apple", "jamshid", "uch"];

function filterString(stringsArray, length) {
  return stringsArray.filter((str) => str.length >= length);
}

const filteredString = filterString(strings, 6);
console.log(filteredString);
