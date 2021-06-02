// An inversion occurs if for any valid indices i and j, i < j and array[i] > array[j].
// O(nlog(n)) Time | O(n) Space
function countInversions(array) {
    if (array.length <= 1) return 0;
    
    return countSubArrayInversions(array, 0, array.length);
}


function countSubArrayInversions(array, startIdx, endIdx) {
    if (endIdx - startIdx <= 1) return 0;

    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    const leftSubArrInversions = countSubArrayInversions(array, startIdx, middleIdx);
    const rightSubArrInversions = countSubArrayInversions(array, middleIdx, endIdx);
    const mergedArrayInversions = mergeArrayAndCountInversion(array, startIdx, middleIdx, endIdx);

    return leftSubArrInversions + rightSubArrInversions + mergedArrayInversions;
}

function mergeArrayAndCountInversion(array, startIdx, middleIdx, endIdx) {
    const sortedArray = [];
    let inversions = 0;
    let leftIdx = startIdx;
    let rightIdx = middleIdx;
    
    while (leftIdx < middleIdx && rightIdx < endIdx) {
        if (array[leftIdx] <= array[rightIdx]) {
            sortedArray.push(array[leftIdx]);
            leftIdx += 1;
        } else {
            inversions += middleIdx - leftIdx;
            sortedArray.push(array[rightIdx]);
            rightIdx += 1;
        }
    }

    sortedArray.push(...array.slice(leftIdx, middleIdx), ...array.slice(rightIdx, endIdx));
    // Modify array in place
    for (let idx = 0; idx < sortedArray.length; idx++) {
        array[startIdx + idx] = sortedArray[idx];
    }

    return inversions;
}


console.log(countInversions([2, 3, 3, 1, 9, 5, 6]));
// Output: 5 [0, 3], [1, 3], [2, 3], [4, 5], [4, 6]