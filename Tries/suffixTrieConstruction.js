class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  // O(n^2) Time | O(n^2) Space - where n is the length of the original string
    populateSuffixTrieFrom(string) {
    for (let idx = 0; idx < string.length; idx++) {
            this.buildSubstringStartingAt(idx, string);
        }
    }
    buildSubstringStartingAt(startIdx, string) {
        let node = this.root;
        
        for (let idx = startIdx; idx < string.length; idx++) {
            const currentLetter = string[idx];
            if (!(currentLetter in node)) node[currentLetter] = {};
            node = node[currentLetter];
        }
        
        node[this.endSymbol] = true;
    } 
  // O(m) Time | O(1) Space - where m is the length of the substring needed to find 
    contains(string) {
        let currentNode = this.root;
          
        for (const letter of string) {
            if (!(letter in currentNode)) return false;
            currentNode = currentNode[letter];
        }
        
        return this.endSymbol in currentNode;
    }
}

const str = new SuffixTrie("babcdsadasanczxcz");
console.log(str.contains("sanczxc"));
// Output: false
console.log(str.contains("sanczxcz"));
// Output: true
