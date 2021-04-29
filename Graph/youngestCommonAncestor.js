class AcestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
};

class NewAncestralTree extends AcestralTree {
    constructor(name) {
        super(name);
    }

    addAsAncestor(descendants) {
        for (const descendant of descendants) {
          descendant.ancestor = this;
        }
    }
}

function  getTrees() {
    const trees = {};
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (const letter of ALPHABET) {
      trees[letter] = new NewAncestralTree(letter);
    }
    return trees;
}

// O(d) Time | O(1) Space
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let depthOne = getDescendantLevel(descendantOne);
    let depthTwo = getDescendantLevel(descendantTwo);

    if (depthOne > depthTwo) return backtrackAncestor(descendantOne, descendantTwo, depthOne - depthTwo);
	else return backtrackAncestor(descendantTwo, descendantOne, depthTwo - depthOne);

}

function backtrackAncestor(lowerDescendant, higherDescendant, diff) {
	while (diff > 0) {
		lowerDescendant = lowerDescendant.ancestor;
		diff--;
	}
	while (lowerDescendant !== higherDescendant) {
		lowerDescendant = lowerDescendant.ancestor;
		higherDescendant = higherDescendant.ancestor;
	}
	return higherDescendant;
}

function getDescendantLevel(descendant) {
    let currentLevel = 0;
    while (descendant !== null) {
        currentLevel++;
        descendant = descendant.ancestor;
    }
    return currentLevel;
}


const trees = getTrees();
trees['A'].addAsAncestor([trees['B'], trees['C']]);
trees['B'].addAsAncestor([trees['D'], trees['E']]);
trees['D'].addAsAncestor([trees['H'], trees['I']]);
trees['C'].addAsAncestor([trees['F'], trees['G']]);

// trees['A'].addAsAncestor([trees['B']]);

console.log(getYoungestCommonAncestor(trees.A, trees.E, trees.I));


