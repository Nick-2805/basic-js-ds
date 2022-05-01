const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
 constructor() {
    this.rootNd = null;
  }

  root() {
    return this.rootNd;
  }

  add(data) {
    this.rootNd = addNode(this.rootNd, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }else if (node.data === data) {
        return node;
      }else if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.rootNd, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }else if (node.data === data) {
        return true;
      }else if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    if(!this.has(data)) return null
      
    return findNode(this.rootNd, data);

    function findNode(node, data) {
      if (node.data === data) return node;
      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNd = removeNode(this.rootNd, data);

    function removeNode(node, data) {
      if (!node) return null;
        
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }  else {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let min = node.right; 
        while (min.left) {
          min = min.left;
        }
        node.data = min.data; 
        node.right = removeNode(node.right, min.data); 
      }
      return node;
    }
  }

  min() {
    if (!this.rootNd) return null;
    let min = this.rootNd;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.rootNd) return null;
    let max = this.rootNd;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};