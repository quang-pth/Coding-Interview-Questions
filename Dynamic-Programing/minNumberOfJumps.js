// O(n) Time | O(1) Space
// function minNumberOfJumps(array) {
//     if (array.length === 1) return 0;
    
//     let jumps = 0;
//     let maxReach = array[0];
//     let steps = array[0];

//     for (let idx = 1; idx < array.length - 1; idx++) {
//         maxReach = Math.max(maxReach, array[idx] + idx);
//         steps -= 1;
//         if (steps === 0) {
//             jumps += 1;
//             steps = maxReach - idx;
//         }
//     }
    
//     return jumps + 1;
// }


// O(n^2) Time | O(n) Space
function minNumberOfJumps(array) {
    const jumps = new Array(array.length).fill(Infinity);
    jumps[0] = 0;
    
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] + j >= i) {
                jumps[i] = Math.min(jumps[i], jumps[j] + 1);
            }
        }
    }
    
    return jumps[jumps.length - 1];
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));
// Output: 4, 3 --> (4 or 2) --> (2 or 3) --> 7 --> 3