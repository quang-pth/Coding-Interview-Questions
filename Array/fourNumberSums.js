// Average: O(n^2) Time | O(n^2) Space
// Worst: O(n^3) Time | O(n^2) Space
function fourNumberSum(array, targetSum) {
    const allPairSums = {};
    const quadruplets = [];

    for (let idx = 1; idx < array.length - 1; idx++) {

        for (let rightIdx = idx + 1; rightIdx < array.length; rightIdx++) {
            const currentSum = array[idx] + array[rightIdx];
            const difference = targetSum - currentSum;

            if (difference in allPairSums) {
                for (const pair of allPairSums[difference]) {
                    quadruplets.push(pair.concat([array[idx], array[rightIdx]]));
                }
            }
        }

        for (let leftIdx = 0; leftIdx < idx; leftIdx++) {
            const currentSum = array[idx] + array[leftIdx];

            if (!(currentSum in allPairSums)) {
                allPairSums[currentSum] = [[array[idx], array[leftIdx]]];
            } else {
                allPairSums[currentSum].push([array[idx], array[leftIdx]]);
            }
        }
    }

    return quadruplets;
}


console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));
// Output: [[ 6, 7, 4, -1 ], [ 6, 7, 1, 2 ]]
console.log(fourNumberSum([-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5], 20));
// Output: [
//   [ 2, -5, 15, 8 ],
//   [ 2, -3, -7, 28 ],
//   [ -3, -10, 28, 5 ],
//   [ 28, -10, -6, 8 ],
//   [ 28, -7, -6, 5 ],
//   [ 2, -5, 12, 11 ],
//   [ 12, -5, 8, 5 ]
// ]
