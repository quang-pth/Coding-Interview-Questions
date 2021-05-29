// O(n) Time | O(n) Space
// function nextGreaterElement(array) {
//     const result = new Array(array.length).fill(-1);
//     const stack = [];
    
//     for (let idx = 0; idx < 2 * (array.length); idx++) {
//         const circleIdx = idx % array.length;
//         const currentValue = array[circleIdx];
        
//         while (stack.length && currentValue > array[stack[stack.length - 1]]) {
//             result[stack[stack.length - 1]] = currentValue;
//             stack.pop();
//         }
        
//         stack.push(circleIdx);
//     }
    
//     return result;
// }

// O(n) Time | O(n) Space
function nextGreaterElement(array) {
    const result = new Array(array.length).fill(-1);
    const stack = [];
    
    for (let idx = 2 * array.length - 1; idx >= 0; idx--) {
        const circleIdx = idx % array.length;
        const currentValue = array[circleIdx];
        
        while (stack.length) {
            if (currentValue < stack[stack.length - 1]) {
                result[circleIdx] = stack[stack.length - 1];
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(currentValue);
    }
    
    return result;
}

console.log(nextGreaterElement([2, 5, -3, -4, 6, 7, 2]));
// Output: 5,  [6, 6, 6, 7, -1, 5]
console.log(nextGreaterElement([5, 6, 1, 2, 3, 4]));
// Output: 5,  [6, -1, 2, 3, 4, 5]
