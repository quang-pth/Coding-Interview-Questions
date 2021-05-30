// O(m*n) Time | O(1) Space
// m is the length of the matrix's row and n is the length of matrix's column
// function searchInSortedMatrix(matrix, target) {
//     for (let row = 0; row < matrix.length; row++) {
//         for (let col = 0; col < matrix[row].length; col++) {
//             const currentNumber = matrix[row][col];
//             if (currentNumber === target) 
//             {
//                 return [row, col];
//             }
//         }
//     }
    
//     return [-1, -1];
// }
  

// O(m + n) Time | O(1) Space
// m is the length of the matrix's row and n is the length of matrix's column
function searchInSortedMatrix(matrix, target) {
	let startRow = 0;
	let startCol = matrix[0].length - 1;
	
	while (startRow < matrix.length && startCol >= 0) {
		const currentNumber = matrix[startRow][startCol];
		
		if (currentNumber < target) {
			startRow += 1;
		} else if (currentNumber > target) {
			startCol -= 1;
		} else {
			return [startRow, startCol];
		}
	}
	
	return [-1, -1];	
}

console.log(searchInSortedMatrix([
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
], 44));
// Output: [3, 3]
console.log(searchInSortedMatrix([
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
], 1000));
// Output: [0, 5]