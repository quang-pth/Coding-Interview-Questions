// Find the starting and ending indices of the smallest subarray needed to be sorted
// in place in order for the entire input array to be sorted
// O(n) Time | O(1) Space
function subarraySort(array) {
    let minOutOfOrder = Infinity;
    let maxOutOfOrder = -Infinity;
    
    for (let idx = 0; idx < array.length; idx++) {
        const number = array[idx];
        if (isOutOfOrder(idx, number, array)) {
            minOutOfOrder = Math.min(number, minOutOfOrder);
            maxOutOfOrder = Math.max(number, maxOutOfOrder); 
        }
    }
    
    if (minOutOfOrder === Infinity) return [-1, -1];
    return findSubArrPosition(minOutOfOrder, maxOutOfOrder, array);
}

function findSubArrPosition(minVal, maxVal, array) {
    let leftSubArrIdx = 0;
    while (minVal >= array[leftSubArrIdx]) leftSubArrIdx += 1;
    
    let rightSubArrIdx = array.length - 1;
    while (maxVal <= array[rightSubArrIdx]) rightSubArrIdx -= 1;
    
    return [leftSubArrIdx, rightSubArrIdx];
}

function isOutOfOrder(idx, number, array) {
    if (idx === 0) return number > array[idx + 1];
    if (idx === array.length - 1) return number < array[idx - 1];
    return number < array[idx - 1] || number > array[idx + 1];
}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
// Output: [3, 9] 
console.log(subarraySort([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]));
// Output: [0, 11] 
