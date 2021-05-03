// O(2^(n+m)) Time | O(n + m) Space
// n, m is respectively the length of string one and string two
// function interweavingStrings(one, two, three) {
// 	if (three.length !== one.length + two.length) return false;

// 	return areInterwoven(one, two, three, 0, 0);
// }

// function areInterwoven(one, two, three, i, j) {
// 	const k = i + j;
// 	if (k === three.length) return true;

// 	if (i < one.length && one[i] === three[k]) {
// 		if (areInterwoven(one, two, three, i + 1, j)) return true;
// 	}

// 	if (j < two.length && two[j] === three[k]) {
// 		return areInterwoven(one, two, three, i, j + 1);
// 	}

// 	return false;
// }

// Memoization Solution
// O(n*m) Time | O(n*m) Space
function interweavingStrings(one, two, three) {
	if (three.length !== one.length + two.length) return false;
	const cache = new Array(one.length + 1).fill(null).map(_ => (new Array(two.length + 1).fill(null)));
	return areInterwoven(one, two, three, 0, 0, cache);
}

function areInterwoven(one, two, three, i, j, cache) {
	if (cache[i][j] !== null) return cache[i][j];

	const k = i + j;
	if (k === three.length) return true;

	if (i < one.length && one[i] === three[k]) {
		cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache);
		if (cache[i][j]) return true;
	}

	if (j < two.length && two[j] === three[k]) {
		cache[i][j] = areInterwoven(one, two, three, i, j + 1, cache);
		return cache[i][j];
	}

	return false;
}

console.log(interweavingStrings("algoexpert", "your-dream-job", "your-algodream-expertjob1"));
console.log(interweavingStrings("algoexpert", "your-dream-job", "your-algodream-expertjo"));
console.log(interweavingStrings("aacaaaa", "aaabaaa", "aaaabacaaaaaaa"));

