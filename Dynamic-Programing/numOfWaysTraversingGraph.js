function numberOfWaysToTraverseGraph(width, height) {
	const col = width < height ? width : height;
	const row = width >= height ? width : height;
	const evenRow = new Array(col).fill(1);
	const oddRow = new Array(col);
	
	for (let i = 1; i < row; i++) {
		let currentRow, previousRow;
		if (i % 2 === 0) {
			currentRow = evenRow;
			previousRow = oddRow;
		} else {
		currentRow = oddRow;
		previousRow = evenRow;	
		}
		currentRow[0] = 1;
		for (let j = 1; j < col; j++) {
			currentRow[j] = currentRow[j - 1] + previousRow[j];
		}
	}
	return (row - 1) % 2 === 0 ? evenRow[col - 1] : oddRow[col - 1]; 
}


console.log(numberOfWaysToTraverseGraph(4, 3));