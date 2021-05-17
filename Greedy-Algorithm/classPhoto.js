// O(nlogn) Time | O(1) Space
function classPhotos(redShirtHeights, blueShirtHeigths) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeigths.sort((a, b) => b - a);
    const colorShirtInFirstRow = redShirtHeights[0] < blueShirtHeigths[0] ? "RED" : "BLUE";

    for (let idx = 0; idx < redShirtHeights.length; idx++) {
        const redShirtHeight = redShirtHeights[idx];
        const blueShirtHeight = blueShirtHeigths[idx];

        if (colorShirtInFirstRow === "RED") {
            if (redShirtHeight >= blueShirtHeight) {
                return false;
            }
        }
        else {
            if (blueShirtHeight >= redShirtHeight) {
                return false;
            }
        }
    }

    return true;
}


console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]))
// true