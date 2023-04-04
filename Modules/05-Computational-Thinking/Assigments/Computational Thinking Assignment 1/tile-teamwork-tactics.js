// # **Assignment 1: Tile Teamwork Tactics**
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice.
// If you advance your piece onto the **same tile** as another player's piece, both of you earn a bonus.
// Can you reach your friend's tile number in the next roll?

// Create a function that takes your position `a` and your friend's position `b`
// and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.

// **Examples**
// possibleBonus(3, 7) ➞ true
// possibleBonus(1, 9) ➞ false
// possibleBonus(5, 3) ➞ false

// **Notes**
// - You cannot move backward (which is why example #3 doesn't work).
// - If you are already on the same tile, return `false`, as you would be advancing away.
// - Expect only positive integer inputs.

// Pseudocode:
// Rule out any non positive integer inputs
// Rule out if a is not smaller than b
// Check if the difference between b and a is greater than 6
// Return false is it is greater, true if it is not

function possibleBonus(a, b) {
	if (
		typeof a !== "number" ||
		typeof b !== "number" ||
		a < 1 ||
		b < 1 ||
		a >= b
	) {
		return false;
	}

	return b - a > 6 ? false : true;
}

//  Alternative form
// function possibleBonus(a, b) {
// 	return typeof a !== "number" ||
// 		typeof b !== "number" ||
// 		a < 1 ||
// 		b < 1 ||
// 		a >= b ||
// 		b - a > 6
// 		? false
// 		: true;
// }

// Test Case
console.log(possibleBonus(3, 7)); // true
console.log(possibleBonus(1, 9)); // false
console.log(possibleBonus(5, 3)); // false
console.log(possibleBonus(13, 19)); // true
console.log(possibleBonus(-3, 2)); // false
console.log(possibleBonus(5, -2)); // false
console.log(possibleBonus(0, 6)); // false
console.log(possibleBonus(1, 5)); // true
console.log(possibleBonus("1", 5)); // false
console.log(possibleBonus(1, "5")); // false
