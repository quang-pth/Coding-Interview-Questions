// O(n) Time | O(n) Space
function kadanesAlgorithm(array) {
    const sumSequences = new Array(array.length).fill(null);
    let maxSumEndingHere = array[0];
    let maxSumSoFar = array[0];
    let maxSumIdx = 0;

    for (let idx = 1; idx < array.length; idx++) {
        const currentValue = array[idx];
        if (currentValue + maxSumEndingHere > currentValue) {
            sumSequences[idx] = [idx - 1];
            maxSumEndingHere = currentValue + maxSumEndingHere;
        } else {
            maxSumEndingHere = currentValue;
        }

        if (maxSumEndingHere > maxSumSoFar) {
            maxSumSoFar = maxSumEndingHere;
            maxSumIdx = idx;
        }
        
    }

    return [maxSumSoFar, buildSequence(array, sumSequences, maxSumIdx)];
}

function buildSequence(array, sumSequeces, currentIdx) {
    const subSeq = [];
    while (currentIdx !== null) {
        subSeq.unshift(array[currentIdx]);
        currentIdx = sumSequeces[currentIdx];
    }
    return subSeq;

}

console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]));
console.log(kadanesAlgorithm([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5]));
console.log(kadanesAlgorithm([1, 2, 3, 4, 5, 6, -22, 7, 8, 9, 10]));