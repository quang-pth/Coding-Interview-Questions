function initLCS(lcs, str1, str2) {
    for (let i = 0; i < str2.length + 1; i++) {
        const row = new Array(str1.length + 1).fill([null, 0, null, null]);
        lcs.push(row);
    }
    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length + 1; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                lcs[i][j] = [str2[i - 1], lcs[i - 1][j - 1][1] + 1, i - 1, j - 1];
            } else {
                if (lcs[i - 1][j][1] > lcs[i][j - 1][1]) {
                    lcs[i][j] = [null, lcs[i - 1][j][1], i - 1, j];
                } else {
                    lcs[i][j] = [null, lcs[i][j - 1][1], i, j - 1];
                }
            }
        }
    }
}
// O(mn) Time | O(mn) Space
function buildSequence(lcs) {
    const longestCommonSequence = [];
    let i = lcs.length - 1;
    let j = lcs[0].length - 1;
    while (i !== 0 && j !== 0) {
        const currentEntry = lcs[i][j];
        if (currentEntry[0] !== null) {
            longestCommonSequence.unshift(currentEntry[0]);
        }
        i = currentEntry[2];
        j = currentEntry[3];
    }
    return longestCommonSequence;
}

function longestCommonSubsequence(str1, str2) {
    const lcs = [];
    initLCS(lcs, str1, str2);
    return buildSequence(lcs).join(" ");

}



console.log(longestCommonSubsequence("ZXVVYZW", "XKYKZPW"));
console.log(longestCommonSubsequence("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAGTUV"));


