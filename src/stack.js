const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Obj {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.s = null;
  }

  push(element) {
    if (!this.s) {
      this.s = new Obj(element);
      return;
    }
    let current = this.s;
    while (current.next) current = current.next;
    current.next = new Obj(element);
  }

  pop() {
    if (!this.s) return undefined;
    let current = this.s;
    while (current.next.next) current = current.next;
    let v = current.next.value;
    current.next = null
    return v;
  }

  peek() {
    if (!this.s) return undefined;
    let current = this.s;
    while (current.next) current = current.next;
    return current.value;
  }
}

module.exports = {
  Stack
};
