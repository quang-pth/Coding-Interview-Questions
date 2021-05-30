// O(n^2) Time | O(n) Space
function threeNumberSum(array, targetSum) {
    const triplets = [];
    array.sort((a, b) => a - b);
    
    for (let idx = 0; idx < array.length; idx++) {
        const currentNumber = array[idx];
        let leftIdx = idx + 1;
        let rightIdx = array.length - 1;
        
        while (leftIdx < rightIdx) {
            const currentSum = currentNumber + array[leftIdx] + array[rightIdx];
            if (currentSum === targetSum) {
                triplets.push([currentNumber, array[leftIdx], array[rightIdx]]);
                leftIdx += 1;
                rightIdx -= 1;
            } 
            else if (currentSum > targetSum) {
                rightIdx -= 1;
            } else {
                leftIdx +=1;
            }
        }
    }
    
    return triplets;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
// Output: [[ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ]]
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 15));
// Output: [
//   [ 1, 5, 9 ],
//   [ 1, 6, 8 ],
//   [ 2, 4, 9 ],
//   [ 2, 5, 8 ],
//   [ 2, 6, 7 ],
//   [ 3, 4, 8 ],
//   [ 3, 5, 7 ],
//   [ 4, 5, 6 ]
// ]
  