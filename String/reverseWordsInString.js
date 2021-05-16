// Return a string that has words in reverse order
// do allowed to use split or reverse method but join

// O(n) Time | O(n) Space
// n is the number of the characters
// function reverseWordsInString(string) {
// 	const words = [];
// 	let startOfWord = 0;
// 	// find all words and spaces
// 	for (let idx = 0; idx < string.length; idx++) {
// 		const currentChar = string[idx];
// // 		end of one word
// 		if (currentChar === " ") {
// 			words.push(string.slice(startOfWord, idx));
// 			startOfWord = idx;
// 		} 
// // 		start of a new word
// 		else if (string[startOfWord] === " ") {
// 			words.push(" ");
// 			startOfWord = idx;
// 		}
// 	}
	
// 	words.push(string.slice(startOfWord));
	
// 	reverseList(words);
// 	return words.join("");
// }

// function reverseList(words) {
//     let startIdx = 0;
// 	let endIdx = words.length - 1;
	
// 	while (startIdx < endIdx) {
// 		const temp = words[startIdx];
// 		words[startIdx] = words[endIdx];
// 		words[endIdx] = temp;
// 		startIdx++;
// 		endIdx--;
// 	}
// }


// O(n) Time | O(n) Space
function reverseWordsInString(string) {
    const characters = [];
    for (const char of string) {
        characters.push(char);
    }

    reverseListRange(characters, 0, characters.length - 1);

    let startOfWord = 0;
    while (startOfWord < characters.length) {
        let endOfWord = startOfWord;

        while (endOfWord < characters.length && characters[endOfWord] !== " ") {
            endOfWord += 1;
        }

        reverseListRange(characters, startOfWord, endOfWord - 1);
        startOfWord = endOfWord + 1;
    }

    return characters.join("");
}

function reverseListRange(characters, startIdx, endIdx) {
    while (startIdx < endIdx) {
        const temp = characters[startIdx];
        characters[startIdx] = characters[endIdx];
        characters[endIdx] = temp;
        startIdx += 1;
        endIdx -= 1;
    }
}

console.log(reverseWordsInString("AlgoExpert is the best!"));
// Output: "best! the is AlgoExpert"
console.log(reverseWordsInString("whitespaces      4     "));
// Output: "    4      whitespaces"