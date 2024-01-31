function calculate(arr) {
  return arr
    .filter((number) => number > 0 && number % 2 !== 0)
    .reduce((sum, currentNumber) => sum + currentNumber, 0);
}

console.log(calculate([5, 0, -5, 20, 888, 17, -32])); // 22

function calculate(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(calculate([5, 0, -5, 20, 888, 17, -32])); // 22

function check(arr, k) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(check([10, 15, 3, 7], 17)); // true
console.log(check([10, 15, 3, 7], 20)); // false

function sumDigits(number) {
  // Convert the number to a string to iterate through its digits
  const numberString = number.toString();

  // Use the Array.from method to create an array of digits
  const digitsArray = Array.from(numberString, Number);

  // Use the reduce method to calculate the sum of the digits
  const sum = digitsArray.reduce((acc, digit) => acc + digit, 0);

  return sum;
}

console.log(sumDigits(123)); // 6
console.log(sumDigits(9045)); // 18
console.log(sumDigits(3)); // 3
