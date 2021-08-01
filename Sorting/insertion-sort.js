// O(n^2) Time | O(1) Space - where n is the length of the array
function insertionSort(array) {
  for (let idx = 1; idx < array.length; idx++) {
		let j = idx;
		while (j > 0 && array[j] < array[j - 1]) {
			swap(j, j - 1, array);
			j -= 1;
		}
	}
	return array;
}

function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}
