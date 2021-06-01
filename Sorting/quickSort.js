function quickSort(array) {
    quickSortPartitioning(array, 0, array.length - 1);
    return array;
}

function quickSortPartitioning(array, startIdx, endIdx) {
    if (startIdx >= endIdx) return;

    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (leftIdx <= rightIdx) {
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            swapValue(array, leftIdx, rightIdx);
        }

        if (array[leftIdx] <= array[pivotIdx]) {
            leftIdx += 1;
        }

        if (array[rightIdx] >= array[pivotIdx]) {
            rightIdx -= 1;
        }
    }

    swapValue(array, pivotIdx, rightIdx);
    const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubarrayIsSmaller) {
        quickSortPartitioning(array, startIdx, rightIdx - 1);
        quickSortPartitioning(array, rightIdx + 1, endIdx);
    } else {
        quickSortPartitioning(array, rightIdx + 1, endIdx);
        quickSortPartitioning(array, startIdx, rightIdx - 1);

    }
}

function swapValue(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


console.log(quickSort([2, 6, 2, 3, 6, 8, 9, 0, -1, -2, -3]));
// Output: [
//   -3, -2, -1, 0, 2,
//   2,  3,  6, 6, 8,
//   9
// ]