// O(n^2) Time | O(1) Space
// n is the length of the input string
function longestPalindromicSubstring(string) {
    let currentLongest = [0, 1];
    for (let idx = 0; idx < string.length; idx++) {
        const odd = getLongestPalindromeFrom(string, idx - 1, idx + 1);
        const even = getLongestPalindromeFrom(string, idx - 1, idx);
        const newPalindrome = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        currentLongest = newPalindrome[1] - newPalindrome[0] > currentLongest[1] - currentLongest[0] ? newPalindrome : currentLongest;
    }
    
    return string.slice(currentLongest[0], currentLongest[1]); 
}
  
function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < string.length) {
        if (string[leftIdx] !== string[rightIdx]) break;
        leftIdx -= 1;
        rightIdx += 1;
    }
    return [leftIdx + 1, rightIdx];
}


console.log(longestPalindromicSubstring("abaxyzzyxf"));
// Output: xyzzyx



  
