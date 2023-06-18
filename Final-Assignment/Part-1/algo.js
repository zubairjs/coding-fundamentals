// # Final Assignment & Project Part 1

// ## Open Ended Answer

// 1. Reverse A String Using Loops.

// reverse('abcde') == 'edcba'
// reverse('hello') == 'olleh'
// reverse('Greetings from The Hacker Collective') == 'evitcelloC rekcaH ehT morf sgniteerG'

// Pseudocode
// 1. Split the string into an array of characters
// 2. Reverse the array elements
// 3. Join the elements into a new string

function reverse(str) {
  const stringArray = str.split('');
  const reversedArray = stringArray.reverse();
  return reversedArray.join('');
}

// Alternative Chained version
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

console.log(reverse('abcde') == 'edcba'); // true
console.log(reverse('hello') == 'olleh'); // true
console.log(
  reverse('Greetings from The Hacker Collective') ==
    'evitcelloC rekcaH ehT morf sgniteerG'
); // true

// 2. Same Back And Forth
//    - Is a string the same backwards and forwards?
//    - Return true if it is, false if it is not.

// sameBackAndForth("abba") === true
// sameBackAndForth("abcdefg") === false

// Pseudocode
// 1. Split, reverse and join the string back into a new reversed string
// 2. Compare the reversed string with the original string

function sameBackAndForth(str) {
  const reversedString = str.split('').reverse().join('');
  return str === reversedString;
}

console.log(sameBackAndForth('abba') === true); // true
console.log(sameBackAndForth('abcdefg') === false); // true

// 3. Given an integer, return an integer that is the reverse ordering of numbers.

// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

// Pseudocode
// 1. Convert the the integer into string
//   // Account for the negative number as well with Math.abs()
// 2. Split, reverse and join the string back into a new reversed string
// 3. Convert the string back into integer
// 4. Return the newly converted integer
//    - If the original integer is negative, multiply by -1

function reverseInt(int) {
  const integerString = Math.abs(int).toString();
  const reversedString = integerString.split('').reverse().join('');
  return int > 0 ? Number(reversedString) : Number(reversedString) * -1;
}

console.log(reverseInt(15) === 51); // true
console.log(reverseInt(981) === 189); // true
console.log(reverseInt(500) === 5); // true
console.log(reverseInt(-15) === -51); // true
console.log(reverseInt(-90) === -9); // true

// 4. SumArr
//    - Find the sum of all items in an array, using loops.

// sumArr([1,2,3,4,5]) == 15
// sumArr([1000,2000,44,55,22]) == 3121
// sumArr([123,456,789]) == 1368

// Pseudocode
// 1. Define a total variable with an initial value of 0
// 2. Loop through the array while adding the current value to the total
// 3. Return the total

// Basic for loop method
// function sumArr(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// Reduce Method
function sumArr(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArr([1, 2, 3, 4, 5]) == 15); // true
console.log(sumArr([1000, 2000, 44, 55, 22]) == 3121); // true
console.log(sumArr([123, 456, 789]) == 1368); // true

// 5. Angry Grandma -
// You will write a function that takes in a String.
// The function should return a new sentence where every word is yelled.
// A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)

// deafGrandma("I have a bad feeling about this") == "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!"

// Pseudocode
// 1. Convert the string into all Uppercase letter
// 2. Split the string separated by an empty space into an array of words
// 3. Join the uppercased words back into a sentence with two exclamation marks and a space in between
// 4. Add two exclamation marks at the end of the sentence

function deafGrandma(str) {
  const splitString = str.toUpperCase().split(' ').join('!! ');
  return splitString + '!!';
}

console.log(deafGrandma('I have a bad feeling about this')); // I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!
console.log(
  deafGrandma('I have a bad feeling about this') ==
    'I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!'
); // true

// 6. What Is Missing -
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// whatIsMissing("abcdefghijklmnopqrstuvwxyz") == undefined
// whatIsMissing("bcdf") == 'e'
// whatIsMissing("abcdefghjklmno") == 'i'

// Pseudocode
// 1. Declare an undefined missingLetter variable
// 2. Loop through the given string
//    - Compare the ASCII value of the current character with the ASCII value of the next character
//    - If they are not consecutive, it means there are missing letter
//      - Convert the missing letter from code with its character
//      - Update the missingLetter with the character
// 3. Return missingLeter

function whatIsMissing(str) {
  let missingLetter;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
      let missingCode = str.charCodeAt(i) + 1;
      missingLetter = String.fromCharCode(missingCode);
    }
  }
  return missingLetter;
}

console.log(whatIsMissing('abcdefghijklmnopqrstuvwxyz') == undefined); // true
console.log(whatIsMissing('bcdf') == 'e'); // true
console.log(whatIsMissing('abcdefghjklmno') == 'i'); // true

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.
// - First argument is the sentence to perform the search and replace on (sentence)
// - Second argument is the word that you want to change (before)
// - Third argument is what you will be changing the second argument with (after)
// - Preserve the case of the first character in the original word when you are replacing it.
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// swap("His name is Tom", "Tom", "john") == "His name is John".
// swap("Let us get back to more Coding", "Coding", "algorithms") == "Let us get back to more Algorithms".
// swap("This has a spellngi error", "spellngi", "spelling") == "This has a spelling error".

// - Hint 1: Check first letter case. toUpperCase()
// - Hint 2: Find the index where before is in the string. indexOf()
// - Hint 3: .splice()
// - Hint 4: Make it into arrays first. Easier to manipulate.

// Method 1

function swap(sentence, before, after) {
  const stringArr = sentence.split(' ');
  const originalIndex = stringArr.indexOf(before);

  if (originalIndex === -1) return 'Word not found';
  if (
    stringArr[originalIndex][0] === stringArr[originalIndex][0].toUpperCase()
  ) {
    const afterArr = after.split('');
    afterArr[0] = after[0].toUpperCase();
    after = afterArr.join('');
  }
  stringArr.splice(originalIndex, 1, after);
  return stringArr.join(' ');
}

// Method 2  (accept case insensitive 'before' word)

// Pseudocode
// 1. Convert sentence to an array of words
// 2. Declare an empty array to be pushed with accepted words later.
// 3. Loop through the array to search for a match for the word to be changed
//    - If the original word's first character is capitalized, capitalized the 'after' word as well.
// 4. Replace the original word with new 'after' word.
// 5. Push all words including the changed into the empty array.
// 6. Returned the joined array as a new changed sentence.

// function swap(sentence, before, after) {
//   const stringArray = sentence.split(' ');
//   const newSentence = [];
//   stringArray.forEach((word) => {
//     if (word.toLowerCase() === before.toLowerCase()) {
//       if (word[0] === word[0].toUpperCase()) {
//         const afterArray = after.split('');
//         afterArray[0] = after[0].toUpperCase();
//         after = afterArray.join('');
//       }
//       word = after;
//     }
//     newSentence.push(word);
//   });
//   return newSentence.join(' ');
// }

console.log(swap('His name is Tom', 'Tom', 'john')); // 'His name is John'
console.log(swap('Let us get back to more Coding', 'Coding', 'algorithms')); // 'Let us get back to more Algorithms'
console.log(swap('This has a spellngi error', 'spellngi', 'spelling')); // 'This has a spelling error'

console.log(swap('His name is Tom', 'Tom', 'john') == 'His name is John'); // true
console.log(
  swap('Let us get back to more Coding', 'Coding', 'algorithms') ==
    'Let us get back to more Algorithms'
); // true
console.log(
  swap('This has a spellngi error', 'spellngi', 'spelling') ==
    'This has a spelling error'
); // true
