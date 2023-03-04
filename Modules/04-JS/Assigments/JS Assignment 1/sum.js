// Problem: Calculate the sum of all numbers
// Given an array of integers, find the sum of all integers.
// You can be assure that the array will only
// contain integers (both positive and negative).
// Examples:
// sum([1, 2, 3, 4]) // output: 10
// sum([-3, 5, 19, -6]) // output: 15

// your code
function sum(numbersArray) {
	let total = 0;
	for (let i = 0; i < numbersArray.length; i++) {
		total += numbersArray[i];
	}
	return total;
}

// Test cases
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([-3, 5, 19, -6])); // 15
