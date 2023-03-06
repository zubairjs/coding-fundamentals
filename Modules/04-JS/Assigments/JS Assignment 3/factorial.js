// # Calculate the Factorial of a Number
// Return the factorial of a provided integer.
// If the integer is represented with the letter n,
// a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function as arguments.

function factorial(anyNumber) {
	// your code
	if (anyNumber === 0) {
		return 1;
	} else {
		for (let i = anyNumber; i > 1; i--) {
			anyNumber *= i - 1;
		}
		return anyNumber;
	}
}

// alternative method:
// function factorial(anyNumber) {
// 	// your code
// 	if (anyNumber <= 1) {
// 		return 1;
// 	} else {
// 		return anyNumber * factorial(anyNumber - 1);
// 	}
// }

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(1)); // 1
console.log(factorial(7)); // 5040
console.log(factorial(3)); // 6
console.log(factorial(8)); // 40320
console.log(factorial(6)); // 720
console.log(factorial(12)); // 479001600
console.log(factorial(0)); // 1
