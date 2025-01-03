const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

class Struct {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.q = null;
  }

  getUnderlyingList() {
    return this.q;
  }

  enqueue(value, place = this.q) {
    if (!this.q) {
      this.q = new Struct(value);
      return;
    }
    if (place.next == null) {
      place.next = new Struct(value);
      return;
    }
    this.enqueue(value, place.next)
  }

  dequeue() {
    if (this.q) {
      let val = this.q.value;
      this.q = this.q.next;
      return val;
    }
    return null;
  }
}

module.exports = {
  Queue
};
