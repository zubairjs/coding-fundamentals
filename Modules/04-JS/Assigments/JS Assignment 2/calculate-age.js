// # Calculate age
// Create a function that takes in user's birth date in **dd/mm/yyyy** format, and calculate user's age.
// Example:
// calculateAge("20/7/2002"); // output:19
// calculateAge("1/1/1979"); // output:43

function calculateAge(date) {
	// your code
	const dateIsoFormatted = date.split("/").reverse().join("-");
	const birthDate = new Date(dateIsoFormatted);

	let today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();

	if (
		today.getMonth() < birthDate.getMonth() ||
		(today.getMonth() == birthDate.getMonth() &&
			today.getDate() < birthDate.getDate())
	) {
		age--;
	}
	return age;
}

console.log(calculateAge("20/7/2002")); // 20
console.log(calculateAge("1/1/1979")); //  44
