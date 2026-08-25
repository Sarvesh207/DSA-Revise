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

// Leetcode Revise

var Node = function (val) {
  this.val = val;
  this.next = null;
};
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  var newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  var newNode = new Node(val);
  if (!this.head) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index == 0) return this.addAtHead(val);
  if (index == this.size) return this.addAtTZail(val);

  var newNode = new Node(val);
  var curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index == 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
