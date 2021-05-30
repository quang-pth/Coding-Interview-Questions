// O(n) Time | O(n) Space
function twoNumberSum(array, targetSum) {
    const visitedNumbers = {};
    for (let idx = 0; idx < array.length; idx++) {
        const currentNumber = array[idx];
        const difference = targetSum - currentNumber;
        
        if (difference in visitedNumbers) {
            return [currentNumber, difference];
        }
        
        visitedNumbers[currentNumber] = true;
    }
    
    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
// Output: -1, 11
console.log(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5));
// Output: 0, -5
  