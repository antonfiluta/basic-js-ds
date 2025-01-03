const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootN = null;
  }

  root() {
    return this.rootN;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootN) {
      this.rootN = newNode;
      return;
    }

    let currentNode = this.rootN;

    while (true) {
      if (newNode.data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(data) {
    let currentNode = this.rootN;
    while (currentNode) {
      if (currentNode.data === data) return true;
      currentNode = data > currentNode.data ? currentNode.right : currentNode.left;
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootN;
    while (currentNode) {
      if (currentNode.data === data) return currentNode;
      currentNode = data > currentNode.data ? currentNode.right : currentNode.left;
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;
      if (data === node.data) {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      node.right = removeNode(node.right, data);
      return node;
    };

    this.rootN = removeNode(this.rootN, data);
  }

  min() {
    let currentNode = this.rootN;
    while (currentNode.left) currentNode = currentNode.left;
    return currentNode ? currentNode.data : null;
  }

  max() { 
    let currentNode = this.rootN; 
    while (currentNode.right) currentNode = currentNode.right; 
    return currentNode ? currentNode.data : null; 
  } 
}

module.exports = {
  BinarySearchTree
};