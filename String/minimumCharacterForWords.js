// O(n * l) Time | O(n * l) Space
// n is the numbers of word, l is the length of the longest word
function minimumCharactersForWords(words) {
	const maximumCharFreq = {};
	
	for (const word of words) {
		const currentCharacterFreq = countCharacterFreq(word);
		upadateMaximumCharFreq(maximumCharFreq, currentCharacterFreq);
	}
	
	return makeArrFromCharFreq(maximumCharFreq);
}

function countCharacterFreq(word) {
	const charFreq = {};
	
	for (const char of word) {
		if (!(char in charFreq)) {
			charFreq[char] = 0;
		}
		charFreq[char] += 1;
	}
	
	return charFreq;
}

function upadateMaximumCharFreq(maximumCharFreq, currentCharacterFreq) {
	for (const [char, freq] of Object.entries(currentCharacterFreq)) {
		if (!(char in maximumCharFreq) || freq > maximumCharFreq[char]) {
			maximumCharFreq[char] = freq;
		}
	}
}

function makeArrFromCharFreq(characterFrequencies) {
	const characters = [];
	
	for (const [char, freq] of Object.entries(characterFrequencies)) {
		for (let idx = 0; idx < freq; idx++) {
			characters.push(char);
		}
	}
	
	return characters;
}


console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]));
// Output: [
//   't', 't', 'h', 'i',
//   's', 'a', 'd', 'd',
//   'e', 'e', 'm', '!'
// ]
console.log(minimumCharactersForWords(["abc", "bavcc", "aaaa", "cde", "efg", "gead"]));
// Output:[
//   'a', 'a', 'a', 'a',
//   'b', 'c', 'c', 'v',
//   'd', 'e', 'f', 'g'
// ]
console.log(minimumCharactersForWords(["168712hn3;nlsdjhahjdksaxa097918@#$RT%T^&*()_"]));
// Output: [
//     '0', '1', '1', '1', '2', '3', '6',
//     '7', '7', '8', '8', '9', '9', 'h',
//     'h', 'h', 'n', 'n', ';', 'l', 's',
//     's', 'd', 'd', 'j', 'j', 'a', 'a',
//     'a', 'k', 'x', '@', '#', '$', 'R',
//     'T', 'T', '%', '^', '&', '*', '(',
//     ')', '_'
//  ]
