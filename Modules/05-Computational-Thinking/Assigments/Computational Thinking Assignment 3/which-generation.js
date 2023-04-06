// # **Assignment 3: Which Generation Are You?**

// Try finding your ancestors and offspring with code.

// Create a function that takes a number "x" and a character "y" ("m" for male, "f" for female),
// and returns the name of an ancestor (m/f) or descendant (m/f).

// - If the number is negative, return the related ancestor.
// - If positive, return the related descendant.
// - You are generation 0. In the case of 0 (male or female), return "me!".

// Examples:
// generation(2, "f") ➞ "granddaughter"
// generation(-3, "m") ➞ "great grandfather"
// generation(1, "f") ➞ "daughter"

// Notes
// --------------------------------------------------------
// | Generation |       Male        |       Female        |
// --------------------------------------------------------
// |     -3     | great grandfather | great grandmother   |
// |     -2     |       grandfather | grandmother         |
// |     -1     |            father | mother              |
// |      0     |               me! | me!                 |
// |      1     |               son | daughter            |
// |      2     |          grandson | granddaughter       |
// |      3     |    great grandson | great granddaughter |

// Which Generation Are You?
function generation(x, y) {
	const invalidInput = validateGeneration(x, y);
	if (invalidInput.length > 0) return invalidInput.join("\n");

	if (x === 0) return "me!";

	const ancestor = {
		1: ["father", "mother"],
		2: ["grandfather", "grandmother"],
		3: ["great grandfather", "great grandmother"],
	};

	const descendant = {
		1: ["son", "daughter"],
		2: ["grandson", "granddaughter"],
		3: ["great grandson", "great granddaughter"],
	};

	let who;
	x > 0 ? (who = descendant[x]) : (who = ancestor[Math.abs(x)]);

	let sex;
	y === "m" ? (sex = 0) : (sex = 1);

	return who[sex];
}

// Input Validation purpose only
function validateGeneration(x, y) {
	let error = [];
	if (!x && !y) error.push("Error: Please input parameters (x, y).");
	if (typeof x !== "number") {
		error.push(
			"Error: The first parameter(x) must be a number between -3 to 3 (inclusive)."
		);
	}
	if (x > 3 || x < -3) {
		error.push(
			"Error: The first parameter(x) is outside the range (-3 <= x <= 3)."
		);
	}
	if (y !== "m" && y !== "f") {
		error.push(`Error: The second parameter(y) must be either "m" or "f".`);
	}
	return error;
}

// Test Cases
console.log(generation(2, "f") === "granddaughter"); // true
console.log(generation(-3, "m") === "great grandfather"); // true
console.log(generation(1, "f") === "daughter"); // true
console.log(generation(0, "f") === "me!"); // true
console.log(generation(0, "m") === "me!"); // true

console.log(generation(2, "f")); // "granddaughter"
console.log(generation(-3, "m")); //  great grandfather"
console.log(generation(1, "f")); // "daughter"
console.log(generation(0, "m")); // "me!"
console.log(generation(0, "f")); // "me!"
console.log(generation(-1, "f")); // "mother"
console.log(generation(-1, "m")); // "father"
console.log(generation(-2, "f")); // "grandmother"

console.log(generation());
// Error: Please input parameters (x, y).
// Error: The first parameter(x) must be a number between -3 to 3 (inclusive).
// Error: The second parameter(y) must be either "m" or "f".

console.log(generation("a", 3));
// Error: The first parameter(x) must be a number between -3 to 3 (inclusive).
// Error: The second parameter(y) must be either "m" or "f".

console.log(generation(4, "m")); // "Error: The first parameter(x) is outside the range (-3 <= x <= 3)."
console.log(generation(-4, "f")); // "Error: The first parameter(x) is outside the range (-3 <= x <= 3)."
console.log(generation(0, "t")); // `Error: The second parameter(y) must be either "m" or "f".`
console.log(generation(0, 1)); // `Error: The second parameter(y) must be either "m" or "f".`

console.log(generation("0", 1));
// Error: The first parameter(x) must be a number between -3 to 3 (inclusive).
// Error: The second parameter(y) must be either "m" or "f".
