// O(nm) Time | O(min(n,)) Space
function levenshteinDistance(str1, str2) {
	const small = str1.length < str2.length ? str1 : str2;
	const big = str1.length >= str2.length ? str1 : str2;

	const evenRow = new Array(small.length + 1);
	const oddRow = new Array(small.length + 1);

	for (let j = 0; j < small.length + 1; j++) {
		evenRow[j] = j;
	}

	for (let i = 1; i < big.length + 1; i++) {
		let currentRow, previousRow;
		if (i % 2 === 0) {
			currentRow = evenRow;
			previousRow = oddRow;
		} else {
			currentRow = oddRow;
			previousRow = evenRow;
		}
		currentRow[0] = i;
		for (let j = 1; j < small.length + 1; j++) {
			if (big[i - 1] === small[j - 1]) currentRow[j] = previousRow[j - 1];
			else currentRow[j] = 1 + Math.min(previousRow[j], previousRow[j - 1], currentRow[j - 1]);
		}
	}

	return big.length % 2 === 0 ? evenRow[small.length] : oddRow[small.length];
}


console.log(levenshteinDistance("abc", "yabd"));
console.log(levenshteinDistance("table", "bal"));