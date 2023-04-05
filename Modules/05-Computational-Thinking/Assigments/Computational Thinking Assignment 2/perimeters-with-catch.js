// # **Assignment 2: Perimeters with a Catch**
// Write a function that takes a number and returns the perimeter of either a circle or a square.
// The input will be in the form (letter l, number num)
// where the letter will be either "s" for square, or "c" for circle,
// and the number will be the side of the square or the radius of the circle.

// Use the following formulas:
// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.

// The catch is you can only use arithmetic or comparison operators, which means:

// - No if... else statements.
// - No objects.
// - No arrays.
// - No formatting methods, etc.

// The goal is to write a short, [branch-free] piece of code.
// (https://en.wikipedia.org/wiki/Branch_(computer_science)#Branch-free_code)

// **Examples**
// perimeter("s", 7) ➞ 28
// perimeter("c", 4) ➞ 25.12
// perimeter("c", 9) ➞ 56.52

// **Notes**
// No rounding is needed.

// Using only arithmetic and comparison operators
function perimeter(l, num) {
	return (l === "s") * (4 * num) + (l === "c") * (6.28 * num);
}

// Test Case
console.log(perimeter("s", 7) === 28); // true
console.log(perimeter("c", 4) === 25.12); // true
console.log(perimeter("c", 9) === 56.52); // true
console.log(perimeter("s", 7)); // 28
console.log(perimeter("c", 4)); // 25.12
console.log(perimeter("c", 9)); // 56.52
console.log(perimeter("c", 7)); // 43.96
console.log(perimeter("s", 4)); // 16
console.log(perimeter("s", 9)); // 36
