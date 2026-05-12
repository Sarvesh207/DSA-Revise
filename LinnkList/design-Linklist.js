class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = currnext;
    }
    curr.next = newNode;
    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    if (index == 0) return this.addAtHead(val);
    if (index == this.size) return this.addAtTail(val);

    let newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
  getAtIndex(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.next.val;
  }
  deleteAtIndex(index) {
    if (index < 0 || index > this.size) return -1;

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
  }
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

let myListList = new LinkList();
myListList.addAtHead(1);
myListList.addAtIndex(1, 2);
myListList.addAtIndex(2, 3);
myListList.addAtIndex(3, 4);
myListList.addAtTail(5);
myListList.deleteAtIndex(2);
myListList.getAtIndex(4);
myListList.print();
