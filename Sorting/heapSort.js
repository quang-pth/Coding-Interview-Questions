// Worst: O(nlog(n)) Time | O(1) Space - where n is the length of the input array
// Best: O(nlog(n)) Time | O(1) Space - where n is the length of the input array
// Average: O(nlog(n)) Time | O(1) Space - where n is the length of the input array
function heapSort(array) {
    buildMaxHeap(array);
    for (let idx = array.length - 1; idx >= 0; idx--) {
        swapValue(array, 0, idx);
        siftDown(array, 0, idx - 1);
    }
    return array;
}

function buildMaxHeap(array) {
    const firstParentIdx = Math.floor((array.length - 1) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        siftDown(array, currentIdx, array.length - 1);
    }
}

function siftDown(heap, currentIdx, endIdx) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let idxToSwap = null;

        if (childOneIdx !== -1 && heap[childOneIdx] < heap[childTwoIdx]) {
            idxToSwap = childTwoIdx;
        } else {
            idxToSwap = childOneIdx;
        }

        if (heap[currentIdx] < heap[idxToSwap]) {
            swapValue(heap, currentIdx, idxToSwap);
            currentIdx = idxToSwap;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }
    }
}

function swapValue(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(heapSort([-5, 3, 2, 0, 2, 55, 4, 6, 7]));
// Output: [
//   -5, 0, 2,  2, 3,
//   4, 6, 7, 55
// ]
console.log(heapSort([4, 4, 4, 2, 0, 0, 9 ,4]));
// Output: [
//   0, 0, 2, 4,
//   4, 4, 4, 9
// ]
