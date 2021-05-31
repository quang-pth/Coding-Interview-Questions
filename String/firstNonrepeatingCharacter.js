// Input string is a string of lowercase English-alphabet letters 
// and return the index of the string's first non-repeating character.

// O(n^2) Time | O(1) Space
// n is the length of the input string
// function firstNonRepeatingCharacter(string) {
// 	for (let i = 0; i < string.length; i++) {
// 		let foundDuplicate = false;
// 		for (let j = 0; j < string.length; j++) {
// 			if (string[i] === string[j] && i !== j) foundDuplicate = true;
// 		}
// 		if (!foundDuplicate) return i;
// 	}
// 	return -1;
// }

// O(n) Time | O(1) Space
// The constant space because the input string has only lowercase English-alphabet letters
// thus, our hash table will have at most 26 key-value pairs of character frequencies.
function firstNonRepeatingCharacter(string) {
	const characterCounts = {};
	for (const character of string) {
		if (!(character in characterCounts)) {
			characterCounts[character] = 0;
		}
		characterCounts[character] += 1;
	}
	for (let idx = 0; idx < string.length; idx++) {
		const currentChar = string[idx];
		if (characterCounts[currentChar] === 1) return idx;
	} 
	return -1;
}


console.log(firstNonRepeatingCharacter("abcdcaf")); // Output: 1, because b is the first non-repeating character.
