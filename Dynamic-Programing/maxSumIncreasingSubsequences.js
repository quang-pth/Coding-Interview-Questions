function maxSumIncreasingSubsequence(array) {
	const sequences = new Array(array.length).fill(null);
	const sums = array.map(num => num);
	let maxSumIdx = 0;

	for (let i = 0; i < array.length; i++) {
		const currentNum = array[i];
		for (let j = 0; j < i; j++) {
			const otherNum = array[j];
			if (otherNum < currentNum && currentNum + sums[j] > sums[i]) {
				sums[i] = currentNum + sums[j];
				sequences[i] = j;
			}
		}

		if (sums[i] > sums[maxSumIdx]) maxSumIdx = i;
	}

	return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array, sequences, currentIdx) {
	const subSeq = [];
	while (currentIdx !== null) {
		subSeq.unshift(array[currentIdx]);
		currentIdx = sequences[currentIdx];
	}
	return subSeq;
}

console.log(maxSumIncreasingSubsequence([-5, -4, -3, -2, -1]));
console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]));
console.log(maxSumIncreasingSubsequence([10, 11, 14, 23, 25, 31, 50]));
console.log(maxSumIncreasingSubsequence([-1, 1]))

