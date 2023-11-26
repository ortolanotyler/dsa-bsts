class TreeNode {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

class SearchTree {
  constructor(rootNode = null) {
    this.root = rootNode;
  }

  /** Method to insert a value iteratively */
  insertValue(val) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (val < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
          break;
        }
        currentNode = currentNode.right;
      }
    }
    return this;
  }

  /** Method to insert a value recursively */
  addValueRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this;
    }

    if (val < node.value) {
      if (!node.left) {
        node.left = new TreeNode(val);
      } else {
        this.addValueRecursively(val, node.left);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(val);
      } else {
        this.addValueRecursively(val, node.right);
      }
    }
    return this;
  }

  /** Method to find a value iteratively */
  searchValue(val) {
    let current = this.root;
    while (current) {
      if (val === current.value) return current;
      current = val < current.value ? current.left : current.right;
    }
    return undefined;
  }

  /** Method to find a value recursively */
  searchValueRecursively(val, node = this.root) {
    if (!node || val === node.value) return node;
    return this.searchValueRecursively(val, val < node.value ? node.left : node.right);
  }

  /** Depth-First Search - Pre-Order Traversal */
  traversePreOrder() {
    const result = [];
    const traverse = (node) => {
      if (!node) return;
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  /** Depth-First Search - In-Order Traversal */
  traverseInOrder() {
    const result = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  /** Depth-First Search - Post-Order Traversal */
  traversePostOrder() {
    const result = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  /** Breadth-First Search */
  traverseLevelOrder() {
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node) {
        result.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return result;
  }

  /** Further Study: Remove a node */
  removeValue(val) {
    // Implement the logic to remove a node
    // This method should follow the rules of removing a node from a binary search tree
    // The method's implementation is left as an exercise for further study
  }

  /** Further Study: Check if the tree is balanced */
  isTreeBalanced(node = this.root) {
    // Implement logic to check if the tree is balanced
    // This method is left as an exercise for further study
  }

  /** Further Study: Find the second highest value */
  findSecondLargest() {
    // Implement logic to find the second largest value in the binary search tree
    // This method is left as an exercise for further study
  }

  /** Further Study: Iterative In-Order Traversal */
  inOrderTraversalIterative() {
    const stack = [];
    const result = [];
    let current = this.root;

    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      if (current) {
        result.push(current.value);
        current = current.right;
      }
    }
    return result;
  }
}

module.exports = SearchTree;
