// Create Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create Linklist
class LinkList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  // Add At head
  addAtHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Add At Tail
  addAtTail(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  // Add At Index
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);

    let curr = this.head;
    let newNode = new Node(val);
    for (let i = 0; i <= index-1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
  // Get Element from index

  getAtIndex(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  // Delete node from index]
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return -1;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size--;
  }

  // Print List
  print() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.val;
      if (curr.next) str += " -> ";
      curr = curr.next;
    }
    console.log(str);
  }
}

const myLinkList = new LinkList();
myLinkList.addAtHead(1);
myLinkList.addAtTail(2);
myLinkList.print();

console.log("File Is Rnnning");
