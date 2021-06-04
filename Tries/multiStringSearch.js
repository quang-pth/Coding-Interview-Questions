// O(bns) Time | O(n) Space
// where b is the length of the big string
// n is the length of the small string and s is the length of the longest small string
// function multiStringSearch(bigString, smallStrings) {
//     return smallStrings.map(smallString => isInBigString(smallString, bigString));
// }

// function isInBigString(smallString, bigString) {
//     for (let idx = 0; idx < bigString.length; idx++) {
//         if (idx + smallString.length > bigString.length) break;
        
//         if (isInBigStringHelper(smallString, bigString, idx)) {
//             return true;	
//         }
//     }
//     return false;
// }

// function isInBigStringHelper(smallString, bigString, startIdx) {
//     let leftBigIdx = startIdx;
//     let rightBigIdx = startIdx + smallString.length - 1;
//     let leftSmallIdx = 0;
//     let rightSmallIdx = smallString.length - 1;
    
//     while (leftBigIdx <= rightBigIdx) {
//         const isValidPosition = bigString[leftBigIdx] === smallString[leftSmallIdx] && bigString[rightBigIdx] === smallString[rightSmallIdx];
//         if (!isValidPosition) return false;
//         leftBigIdx += 1;
//         rightBigIdx -= 1;
//         leftSmallIdx += 1;
//         rightSmallIdx -= 1;
//     }
    
//     return true;
// }


// O(b^2 + ns) Time | O(b^2 + n) Space
// where b is the length of the big string
// n is the length of the small string and s is the length of the longest small string
// function multiStringSearch(bigString, smallStrings) {
// 	const trie = new ModifiedSuffixTrie(bigString);
// 	return smallStrings.map(smallString => trie.contains(smallString));
// }

// class ModifiedSuffixTrie {
// 	constructor(string) {
// 		this.root = {};
// 		this.populateSuffixTrieFrom(string);
// 	}
// // O(n^2) Time | O(n^2) Space - where n is the length of the original string
// 	populateSuffixTrieFrom(string) {
// 	for (let idx = 0; idx < string.length; idx++) {
// 		this.buildSubstringStartingAt(idx, string);
// 		}
// 	}
// 	buildSubstringStartingAt(startIdx, string) {
// 		let node = this.root;
// 		for (let idx = startIdx; idx < string.length; idx++) {
// 			const currentLetter = string[idx];
// 			if (!(currentLetter in node)) node[currentLetter] = {};
// 			node = node[currentLetter];
// 		}
// 	} 
// // O(m) Time | O(1) Space - where m is the length of the substring needed to find 
// 	contains(string) {
// 		let currentNode = this.root;
// 		for (const letter of string) {
// 				if (!(letter in currentNode)) return false;
// 				currentNode = currentNode[letter];
// 		}
// 		return true;
// 	}
// }


// O(bs + ns) Time | O(ns) Space
// where b is the length of the big string
// n is the length of the small string and s is the length of the longest small string
function multiStringSearch(bigString, smallStrings) {
    const trie = new Trie();
// 	O(ns) Time 
    for (const string of smallStrings) {
        trie.insert(string);
    }
    
    const containedStrings = {};
// 	O(bs) Time
    for (let i = 0; i < bigString.length; i++) {
        findSmallStringsIn(bigString, i, trie, containedStrings);	
    }
    
    return smallStrings.map(string => string in containedStrings);
}

function findSmallStringsIn(string, startIdx, trie, containedStrings) {
    let currentNode = trie.root;
    for (let idx = startIdx; idx < string.length; idx++) {
        const char = string[idx];
        
        if (!(char in currentNode)) break;
        currentNode = currentNode[char];
        
        if (trie.endSymbol in currentNode) {
            containedStrings[currentNode[trie.endSymbol]] = true;
        }
    }
}

class Trie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
    }
    insert(string) {
        let currentNode = this.root;
        for (const char of string) {
            if (!(char in currentNode)) currentNode[char] = {};
            currentNode = currentNode[char];
        }
        currentNode[this.endSymbol] = string;
    }
}

console.log(multiStringSearch("this is a big string", ["this", "yo", "is", "a", "bigger", "string", "kappa"]));
// Output: [true, false, true, true, false,true, false]