// Create a function that takes an integer n and returns the nth tetrahedral number.
// Examples:
// tetra(2) ➞ 4
// tetra(5) ➞ 35
// tetra(6) ➞ 56
// https://en.wikipedia.org/wiki/Tetrahedral_number

function tetra(n) {
	// your code
	return (n * (n + 1) * (n + 2)) / 6;
}

console.log(tetra(2)); // 4
console.log(tetra(5)); // 35
console.log(tetra(6)); // 56
