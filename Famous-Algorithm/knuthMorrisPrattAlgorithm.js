// Check if the first string contains the second string

// O(n + m) Time | O(m) Space - where n is the length of the input string
// and m is the length of the input substring
function knuthMorrisPrattAlgorithm(string, substring) {
    const pattern = buildPattern(substring);
    return doesMatch(string, substring, pattern);
}

function buildPattern(substring) {
    const pattern = new Array(substring.length).fill(-1);
    let leftIdx = 0;
    let rightIdx = 1;
    
    while (rightIdx < substring.length) {
        if (substring[leftIdx] === substring[rightIdx]) {
            pattern[rightIdx] = leftIdx;
            leftIdx += 1;
            rightIdx += 1;
        } else if (leftIdx > 0) {
            leftIdx = pattern[leftIdx - 1] + 1;
        } else {
            rightIdx += 1;
        }
    }
    
    return pattern;
} 

function doesMatch(string, substring, pattern) {
    let idx = 0;
    let subIdx = 0;
    
    while (idx + substring.length - subIdx <= string.length) {
        if (string[idx] === substring[subIdx]) {
            if (subIdx === substring.length - 1) return true;
            idx += 1;
            subIdx += 1;
        } else if (subIdx > 0) {
            subIdx = pattern[subIdx - 1] + 1;
        } else {
            idx += 1;
        }
    }
    
    return false;
}

console.log(knuthMorrisPrattAlgorithm("aefoaefcdaefcdaed", "aefcdaed"))