// O(n^2*n!) Time | O(n!n) Space
// function getPermutations(array) {
// 	const permutations = [];
// 	constructPermutations(array, [], permutations);
// 	return permutations;
// }

// function constructPermutations(array, currentPermutation, permutations) {
// 	if (array.length === 0 && currentPermutation.length !== 0) {
// 		permutations.push(currentPermutation);
// 	}
// 	else {
// 		for (let number of array) {
// 			const newArray = array.filter(num => num !== number);
// 			const newPermutation = currentPermutation.concat([number]);
// 			constructPermutations(newArray, newPermutation, permutations)
// 		}
// 	}
// }


// O(n!n) Time | O(n!n) Space
function getPermutations(array) {
	const permutations = [];
	permutationsHelper(0, array, permutations);
	return permutations;
}

function permutationsHelper(i, array, permutations) {
	if (i === array.length - 1) permutations.push(array.slice());
	else {
		for (let j = i; j < array.length; j++) {
			swap(array, i, j);
			permutationsHelper(i + 1, array, permutations);
			swap(array, i, j);
		}
	}
}

function swap(array, i, j) {
	const tempValue = array[i];
	array[i] = array[j];
	array[j] = tempValue;
}


array = [1, 2, 3];

console.log(getPermutations(array));