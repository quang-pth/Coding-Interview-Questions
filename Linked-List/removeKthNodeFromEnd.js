class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
  // O(n) Time | O(1) Space
function removeKthNodeFromEnd(head, k) {
    let first = head;
    let second = head;
    let position = 1;
    // second at kth node ahead of first
    while (position <= k) {
        second = second.next;
        position++;
    }

    if (second === null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }

    while (second.next !== null) {
        first = first.next;
        second = second.next;
    }

    first.next = first.next.next;
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

let head = new LinkedList(0);
let one = new LinkedList(1);
let two = new LinkedList(2);
let three = new LinkedList(3);
let four = new LinkedList(4);
let five = new LinkedList(5);
let six = new LinkedList(6);
let seven = new LinkedList(7);
let eight = new LinkedList(8);
let nine = new LinkedList(9);

head.next = one;
one.next = two;
two.next = three;
three.next = four
four.next = five;
five.next = six;
six.next = seven;
seven.next = eight;
eight.next = nine;

removeKthNodeFromEnd(head, 10);
console.log(getNodesInArray(head));



