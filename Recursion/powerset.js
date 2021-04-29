// Recursion: O(n*2^n) Time | O(n*2^n) Space
// function powerset(array, idx = null) {
//     if (idx === null) {
// 		idx = array.length - 1;
// 	} 
// 	if (idx < 0) {
// 		return [[]];
// 	}
// 	const valueToAdd = array[idx];
// 	const subsets = powerset(array, idx - 1);
// 	const length = subsets.length;
// 	for (let i = 0; i < length; i++) {
// 		subsets.push(subsets[i].concat(valueToAdd));
// 	}
// 	return subsets;
// }
 

// Iteration: O(n*2^n) Time | O(n*2^n) Space
function powerset(array) {
    const subsets = [[]];
    for (const ele of array) {
        const length = subsets.length;
        for (let i = 0; i < length; i++) {
            const currentSubset = subsets[i];
            subsets.push(currentSubset.concat(ele));
        }
    }
    return subsets;
}

console.log(powerset([1, 2, 3, 4]));