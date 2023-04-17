const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.front;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.rear === null) {
      this.front = this.rear = newNode;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here


  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (this.front === null) {
      return null;
    }

    const removedNode = this.front;
    this.front = this.front.next;

    if (this.front === null) {
      this.rear = null;
    }

    return removedNode.value;
  }
}

module.exports = {
  Queue
};
