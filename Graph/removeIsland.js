// O(wh) Time | O(wh) Space
function removeIslands(matrix) {
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix.length; col++) {
			const isRowBother = row === 0 || row === matrix.length - 1;
			const isColBother = col === 0 || col === matrix[row].length - 1;
			const isBother = isRowBother || isColBother;
			
			if (!isBother) continue;
			if (matrix[row][col] !== 1) continue;
			
			changeOnesConnectedToBotherToTwo(row, col, matrix);
		}
	}
	
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			const currentValue = matrix[row][col];
			if (currentValue === 2) matrix[row][col] = 1;
			else if (currentValue === 1) matrix[row][col] = 0;
		}
	}
	
	return matrix;
}


function changeOnesConnectedToBotherToTwo(row, col, matrix) {
	const stack = [[row, col]];
	
	while (stack.length) {
		const currentPosition = stack.pop();
		const [currentRow, currentCol] = currentPosition;
		
		matrix[currentRow][currentCol] = 2;
		
		const neighbors = getUnvisitedNeighbors(currentRow, currentCol, matrix);
		for (let neighbor of neighbors) {
			const i = neighbor[0];
			const j = neighbor[1];
			if (matrix[i][j] != 1) continue;
			stack.push([i, j]);
		}
	}
	
}

function getUnvisitedNeighbors(currentRow, currentCol, matrix) {
	const neighbor = [];
	const numsRow = matrix.length;
	const numsCol = matrix[currentRow].length;
	
	if (currentRow > 0) neighbor.push([currentRow - 1, currentCol]);
	if (currentRow < numsRow - 1) neighbor.push([currentRow + 1, currentCol]);
	if (currentCol > 0) neighbor.push([currentRow, currentCol - 1]);
	if (currentRow < numsCol) neighbor.push([currentRow, currentCol + 1]);
	
	return neighbor;
}

console.log(removeIslands( 
    [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
    ]
));

