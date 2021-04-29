class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

const [BEFORE_NODE, AFTER_NODE] = [0, 1];

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    setHead(node) {
        if (this.head === null) {
                this.head = node;
                this.tail = node;
                return
            }
            this.insertBefore(this.head, node);
      }
    
    // O(1) Time | O(1) Space
      setTail(node) {
            if (this.tail === null) {
                this.setHead(node);
                return;
            }
            this.insertAfter(this.tail, node);
      }
        
    // O(1) Time | O(1) Space
      insertBefore(node, nodeToInsert) {
            if (nodeToInsert === this.head && nodeToInsert === this.tail) {
                return;
            }
            this.remove(nodeToInsert);
            nodeToInsert.prev = node.prev;
            nodeToInsert.next = node;
            if (node.prev === null) {
                this.head = nodeToInsert;
            } else {
                node.prev.next = nodeToInsert;
            }
            node.prev = nodeToInsert;
            
      }
    // O(1) Time | O(1) Space
      insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) {
                return;
            }
            this.remove(nodeToInsert);
            nodeToInsert.next = node.next;
            nodeToInsert.prev = node;
            if (node.next === null) {
                this.tail = nodeToInsert;
            } else {
                node.next.prev = nodeToInsert;
            }
            node.next = nodeToInsert;
      }
    
      insertAtPosition(position, nodeToInsert) {
        if (position === 1) {
                this.setHead(nodeToInsert);
                return;
            }
            let currentNode = this.head;
            let positionToInsert = 1;
            while (currentNode !== null && positionToInsert !== position) {
                currentNode = currentNode.next;
                positionToInsert++;
            }
            
            if (currentNode !== null) {
                this.insertBefore(currentNode, nodeToInsert);
            } else {
                this.setTail(nodeToInsert);
            }
            
      }
    
    // 	O(n) Time | O(1) Space
      removeNodesWithValue(value) {
        let node = this.head;
            while (node	!== null) {
                let nodeToRemove = node;
                node = nodeToRemove.next;
                if (nodeToRemove.value === value) {
                    this.remove(nodeToRemove);
                }
            }
      }
    
    // 	O(1) Time | O(1) Space
      remove(node) {
            if (node === this.head) {
                this.head = this.head.next;
            }
            if (node === this.tail) {
                this.tail = this.tail.prev;
            }
            this.removeNodesBinding(node);
      }
    
    // 	O(n) Time | O(1) Space
      containsNodeWithValue(value) {
        let currentNode = this.head;
            while (currentNode !== null && currentNode.value !== value) {
                currentNode = currentNode.next;
            }
            return currentNode !== null;
      }
        
        removeNodesBinding(node) {
            if (node.prev !== null) {
                node.prev.next = node.next;
            }
            if (node.next !== null) {
                node.next.prev = node.prev;
            }
            node.prev = null;
            node.next = null;
        }

}

function bindNodes(nodeOne, nodeTwo) {
    nodeOne.next = nodeTwo;
    nodeTwo.prev = nodeOne;
}

function getNodeValuesHeadToTail(linkedList) {
    const values = [];
    let node = linkedList.head;
    while (node !== null) {
      values.push(node.value);
      node = node.next;
    }
    return values;
}
  

const linkedList = new DoublyLinkedList();
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const three2 = new Node(3);
const three3 = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

bindNodes(one, two);
bindNodes(two, three);
bindNodes(three, four);
bindNodes(four, five);
linkedList.head = one;
linkedList.tail = five;


linkedList.setHead(four);
linkedList.setTail(six);
linkedList.insertBefore(six, three);
linkedList.insertAfter(six, three2);
linkedList.insertAtPosition(1, three3);
linkedList.removeNodesWithValue(3);
linkedList.remove(two);

console.log(getNodeValuesHeadToTail(linkedList));
console.log(linkedList.containsNodeWithValue(5));

