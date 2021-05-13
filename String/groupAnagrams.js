// O(w*nlogn + w*wlogw) Time | O(wn) Space
// w is the number of words
// n is the length of the longest word
// function groupAnagrams(words) {
//     if (words.length === 0) return [];

//     const sortedWord = words.map(word => word.split('').sort().join(''));
//     const indices = [...Array(words.length).keys()];

//     indices.sort((a, b) => {
//         if (sortedWord[a] < sortedWord[b]) return -1;
//         if (sortedWord[a] > sortedWord[b]) return 1;
//         return 0;
//     })

//     const result = [];
//     let anagramGroup = [];
//     let currentAnagram = sortedWord[indices[0]];
//     for (let idx of indices) {
//         const word = words[idx];
//         const anagram = sortedWord[idx];
        
//         if (anagram === currentAnagram) {
//             anagramGroup.push(word);
//             continue;
//         }
        
//         result.push(anagramGroup);
//         anagramGroup = [word];
//         currentAnagram = anagram;
//     }

//     result.push(anagramGroup);

// 	return result;
// }

// O(w*nlogn) Time | O(wn) Space
// w is the number of words
// n is the length of the longest word
function groupAnagrams(words) {
	const anagrams = {};
	for (const word of words) {
		const sortedWord = word.split('').sort().join('');
		if (!(sortedWord in anagrams)) {
			anagrams[sortedWord] = [word];
		} else {
			anagrams[sortedWord].push(word);
		}
	}
	return Object.values(anagrams);
}

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]));
// Ouput: [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat'], ['foo']]