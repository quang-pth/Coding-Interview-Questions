// O(m * (n + m)) Time | O(1) Space
// m, n is the length of characters string and documen string
// function generateDocument(characters, document) {
// 	for (const char of document ) {
// 		const documentFrequency = countCharacterFrequency(char, document);
// 		const charactersFrequency = countCharacterFrequency(char, characters);
// 		if (documentFrequency > charactersFrequency) return false;
// 	}
// 	return true;
// }

// function countCharacterFrequency(character, target) {
// 	let frequency = 0;
// 	for (const char of target) {
// 		if (char === character) frequency++;
// 	}
// 	return frequency;
// }

// O(c * (m + n)) Time | O(c) Space
// m, n is the length of characters string and documen string
// c is the unique character stored in alreadyCounted set
// function generateDocument(characters, document) {
// 	const alreadyCounted = new Set();
// 	for (const char of document ) {
// 		if (char in alreadyCounted) continue;
// 		const documentFrequency = countCharacterFrequency(char, document);
// 		const charactersFrequency = countCharacterFrequency(char, characters);
// 		if (documentFrequency > charactersFrequency) return false;
		
// 		alreadyCounted.add(char);
// 	}
// 	return true;
// }

// function countCharacterFrequency(character, target) {
// 	let frequency = 0;
// 	for (const char of target) {
// 		if (char === character) frequency++;
// 	}
// 	return frequency;
// }

// O(m + n) Time | O(c) Space
// m, n is the length of characters string and documen string
// c is the unique character stored in characterCounts
function generateDocument(characters, document) {
	const characterCounts = {};
	
	for (const char of characters) {
		if (!(char in characterCounts)) {
			characterCounts[char] = 0;
		}
		characterCounts[char] += 1;
	}
	
	for (const char of document) {
		if (!(char in characterCounts) || characterCounts[char] === 0) {
			return false;
		}
		characterCounts[char] -= 1;
	}
	
	return true;
}


console.log(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"));