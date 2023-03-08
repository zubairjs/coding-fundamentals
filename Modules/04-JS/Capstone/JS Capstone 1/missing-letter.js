// Return the missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function missingLetter(str) {
	let missingChar;
	for (let i = 0; i < str.length - 1; i++) {
		if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
			let missingCode = str.charCodeAt(i) + 1;
			missingChar = String.fromCharCode(missingCode);
		}
	}
	return missingChar;
}

// Test cases:
console.log(missingLetter("abce")); // "d"
console.log(missingLetter("abcdefghjklmno")); // "i"
console.log(missingLetter("stvwx")); // "u"
console.log(missingLetter("bcdf")); // "e"
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
