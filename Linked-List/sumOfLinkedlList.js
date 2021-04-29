class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }

    addMany(values) {
        let current = this;
        while (current.next !== null) {
          current = current.next;
        }
        for (const value of values) {
          current.next = new LinkedList(value);
          current = current.next;
        }
        return this;
    }
}

// O(max(m, n)) Time | O(max(m, n)) Space
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let newLinkkedListHeadPoitner = new LinkedList(0);
    let currentNode = newLinkkedListHeadPoitner;
    let carry = 0;

    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;

    while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
        const valueOne = nodeOne !== null ? nodeOne.value : 0;
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
        const sum = valueOne + valueTwo + carry;
        const valueToAdd = sum % 10;
        const newNode = new LinkedList(valueToAdd);

        currentNode.next = newNode;
        currentNode = currentNode.next;

        carry = Math.floor(sum / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
        
    }

    return newLinkkedListHeadPoitner.next;
}


function getNodesInArray(linkedList) {
    const nodes = [];
    let current = linkedList;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
}


const ll1 = new LinkedList(1).addMany([2, 3]);
const ll2 = new LinkedList(6).addMany([7, 9, 8, 1]);

const sumList = sumOfLinkedLists(ll1, ll2);
console.log(getNodesInArray(sumList));



