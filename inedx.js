// Problem number 1
function createPyramid(numLines) {
  for (let i = 1; i <= numLines; i++) {
    let stars = "#".repeat(i);
    console.log(stars);
  }
}
createPyramid(6);

// Problem number 2
function filterEvenNumbers(arr) {
  return arr.filter((number) => number % 2 === 0);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArray = filterEvenNumbers(inputArray);

console.log(resultArray);

// Problem number 2
function stalinSort(arr) {
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= result[result.length - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}
const unsortedArray = [5, 2, 8, 3, 1, 6, 7, 4];
const sortedArray = stalinSort(unsortedArray);

console.log(sortedArray);
