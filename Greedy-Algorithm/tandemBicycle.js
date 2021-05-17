// two input array always with the same length
// O(nlogn) Time | O(1) Space
// n is the length of the input array
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
    
    if (!fastest) {
        blueShirtSpeeds.reverse();
    }

    let totalSpeed = 0;
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
        const redRiderSpeed = redShirtSpeeds[idx];
        const blueRiderSpeed = blueShirtSpeeds[blueShirtSpeeds.length - 1 - idx];
        const tandemSpeed = Math.max(redRiderSpeed, blueRiderSpeed);
        totalSpeed += tandemSpeed;
    }

    return totalSpeed;
}

console.log(tandemBicycle([5, 5, 3, 9, 2],  [3, 6, 7, 2, 1], true));
// Ouput: 32
console.log(tandemBicycle([5, 5, 3, 9, 2],  [3, 6, 7, 2, 1], false));
// Ouput: 25