// # **Capstone Project: How Many Days Between Two Dates**

// Create a function that takes two dates and
// returns the number of days between the first and second date.

// Examples:
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6

// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// // Dates may not all be in the same month/year.

// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10

// Pseudocode:
// Get the periods since ECMAScript epoch to both dates in milliseconds
// Get the difference between the two periods
// Convert from milliseconds to days

// Explicitly calling the getTime() method on the Date object
// function getDays(startDate, endDate = new Date()) {
// 	if (!startDate) return "Error: Please input exactly one or two dates";
// 	const millisecondsBetween = Math.abs(endDate.getTime() - startDate.getTime());
// 	return Math.floor(millisecondsBetween / 24 / 60 / 60 / 1000);
// }

// Pseudocode:
// Get the difference between the two periods from the dates given
// Convert from milliseconds to days

// Explicitly calling the valueOf() method on the Date object
// function getDays(startDate, endDate = new Date()) {
// 	if (!startDate) return "Error: Please input exactly one or two dates.";
// 	const millisecondsBetween = Math.abs(endDate.valueOf() - startDate.valueOf());
// 	return Math.floor(millisecondsBetween / 24 / 60 / 60 / 1000);
// }

// Implicitly calling the valueOf() method on the Date object
function getDays(startDate, endDate = new Date()) {
	if (!startDate) return "Error: Please input exactly one or two dates.";
	const millisecondsBetween = Math.abs(endDate - startDate);
	return Math.floor(millisecondsBetween / 24 / 60 / 60 / 1000);
}

// Test Cases
console.log(
	getDays(new Date("June 14, 2019"), new Date("June 20, 2019")) === 6
); // true
console.log(
	getDays(new Date("December 29, 2018"), new Date("January 1, 2019")) === 3
); // true
console.log(
	getDays(new Date("July 20, 2019"), new Date("July 30, 2019")) === 10
); // true

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019"))); // 6
console.log(
	getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
); // 3
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019"))); // 10
console.log(
	getDays(new Date("September 11, 2001"), new Date("March 11, 2020")),
	"days"
); // 6756 days

console.log(
	getDays(new Date("March 11, 2020"), new Date("September 11, 2001")),
	"days"
); // 6756 days

console.log(
	getDays(new Date("August 17, 1945"), new Date("August 31, 1957")),
	"days"
); // 4397 days
console.log(
	getDays(new Date("August 31, 1957"), new Date("April 7, 2023")),
	"days"
); // 23959 days
console.log(
	getDays(new Date("August 31, 1957"), new Date("September 16, 1963")),
	"days"
); // 2207 days
console.log(getDays(new Date("August 31, 1957"), new Date()), "days"); // Logs days since August 31, 1957
console.log(getDays()); // "Error: Please input exactly one or two dates."
console.log(
	getDays(new Date("August 30, 1568"), new Date("September 4, 1568")),
	"days"
); // 5 days
