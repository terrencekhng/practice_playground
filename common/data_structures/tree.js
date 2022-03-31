class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      this.root.parent = null;
    } else {
      this.insertNode(this.root, newNode);
    }
    return this;
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
        newNode.parent = node;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(node) {
    if (!node.left) {
      let parent = node.parent;
      if (node.right) {
        node.right.parent = node.parent;
        node.parent.right = node.right;
      } else {
        // leaf
        node.parent.left = null;
      }
      if (!parent) {
        this.root = node.right;
      }
    }
    else if (!node.right) {
      let parent = node.parent;
      if (node.left) {
        node.left.parent = node.parent;
        node.parent.right = node.left;
      }
      if (!parent) {
        this.root = node.left;
      }
    } else {
      let parent = node.parent;
      let minNode = this.minimum(node.right);
      if (parent) {
        if (parent.right.value === node.value) {
          parent.right = minNode;
        } else if (parent.left.value === node.value) {
          parent.left = minNode;
        }
      } else {
        this.root = minNode;
      }

      // If the minimum node is the right child
      if (node.right.value !== minNode.value) {
        minNode.right = node.right;
      }
      if (minNode.value < minNode.parent.value) {
        minNode.parent.left = null;
      } else {
        minNode.parent.right = null;
      }
      minNode.parent = node.parent;
      minNode.left = node.left;
    }
  }

  /**
   * In-order traversal means to "visit" (often, print) the left branch, then the current node, and finally, the right branch.
   * @param node
   */
  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  /**
   * Pre-order traversal visits the current node before its child nodes (hence the name "pre-order").
   * @param node
   */
  preOrderTraversal(node) {
    if (node) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  /**
   * Post-order traversal visits the current node after its child nodes (hence the name"post-order").
   * @param node
   */
  postOrderTraversal(node) {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }

  search(node, key) {
    if (node.value === key) {
      return node;
    }
    if (key < node.value) {
      return this.search(node.left, key);
    } else {
      return this.search(node.right, key);
    }
  }

  minimum(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  maximum(node) {
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  successor(node) {
    if (node.right) {
      return this.minimum(node.right);
    }
    let parent = node.parent;
    while (parent && parent.right && node.value === parent.right.value) {
      node = parent;
      parent = parent.parent;
    }
    return parent;
  }

  predecessor(node) {
    if (node.left) {
      return this.maximum(node.left);
    }
    let parent = node.parent;
    while (parent && parent.left && parent.left.value === node.value) {
      node = parent;
      parent = parent.parent;
    }
    return parent;
  }

  /**
   * p4.3
   * Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
   * @param node
   */
  listOfDepths(node) {
    // add root
    let queue = [node];
    console.log('insert: ', node.value);
    while (queue.length) {
      console.log('insert the above new linked list');
      let parents = queue;
      queue = [];
      for (let i = 0; i < parents.length; ++i) {
        if (parents[i].left) {
          console.log('insert: ', parents[i].left.value);
          queue.push(parents[i].left);
        }
        if (parents[i].right) {
          console.log('insert: ', parents[i].right.value);
          queue.push(parents[i].right);
        }
      }
    }
  }

  /**
   * p4.4
   * Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
   * @param node
   * @return {boolean}
   */
  isBalanced(node) {
    return this.getHeights(node) !== -Infinity;
  }

  getHeights(node) {
    if (!node) {
      return -1;
    }
    let leftHeight = this.getHeights(node.left);
    if (leftHeight === -Infinity) {
      return -Infinity;
    }
    let rightHeight = this.getHeights(node.right);
    if (rightHeight === -Infinity) {
      return -Infinity;
    }

    let heightDiff = leftHeight - rightHeight;
    if (Math.abs(heightDiff) > 1) {
      return -Infinity;
    } else {
      return Math.max(this.getHeights(node.left), this.getHeights(node.right)) + 1;
    }
  }
}

let binaryTree = new BinaryTree();
binaryTree.insert(0).insert(1).insert(4).insert(3).insert(2);
console.log('in-order traversal');
binaryTree.inOrderTraversal(binaryTree.root);
console.log('pre-order traversal');
binaryTree.preOrderTraversal(binaryTree.root);
console.log('post-order traversal');
binaryTree.postOrderTraversal(binaryTree.root);
let result = binaryTree.search(binaryTree.root, 4);
console.log(result);
let min = binaryTree.minimum(binaryTree.root);
let max = binaryTree.maximum(binaryTree.root);
console.log('min: ', min.value);
console.log('max: ', max.value);
let binaryTree2 = new BinaryTree();
binaryTree2.insert(5).insert(3).insert(2).insert(4).insert(6);
let min2 = binaryTree2.minimum(binaryTree2.root);
let max2 = binaryTree.maximum(binaryTree2.root);
console.log('min2: ', min2.value);
console.log('max2: ', max2.value);
let binaryTree3 = new BinaryTree();
binaryTree3.insert(15).insert(6).insert(3).insert(2).insert(4).insert(7).insert(6.5).insert(13).insert(9).insert(8).insert(18).insert(17).insert(20);
let successor = binaryTree3.successor(binaryTree3.root.left.right.right);
console.log('successor: ', successor.value);
let predecessor = binaryTree3.predecessor(binaryTree3.root.left.right.right.left.left);
console.log('predecessor: ', predecessor.value);

// remove leaf
// binaryTree3.remove(binaryTree3.root.left.left.left);
// console.log(binaryTree3.root.left.left);

// remove node with both left and right child
// binaryTree3.remove(binaryTree3.root.left);
// console.log(binaryTree3.root.left.value);

// remove node without right child
// binaryTree3.remove(binaryTree3.root.left.right.right);
// console.log(binaryTree3.root.left.right.right.value);

// remove node without left child
// binaryTree3.remove(binaryTree3.root.left.right);
// console.log(binaryTree3.root.left.right.right.left.left)


/**
 * p4.2
 * Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
 * @param array
 * @return {BinaryTree}
 */
function minimalTree(array) {
  let tree = new BinaryTree();
  insertPart(tree, array);
  return tree;
}

function insertPart(tree, array) {
  if (!array.length) {
    return;
  }
  let length = array.length;
  let mid = Math.floor(length / 2);
  tree.insert(array[mid]);
  insertPart(tree, array.slice(0, mid));
  insertPart(tree, array.slice(mid + 1));
}

let lastPrinted = null;

/**
 * p4.5
 * Implement a function to check if a binary tree is a binary search tree.
 * @param node
 * @return {boolean|boolean|*}
 */
function validateBST(node) {
  if (!node) {
    return true;
  }
  if (!validateBST(node.left)) {
    return false;
  }
  if (!lastPrinted && node.value <= lastPrinted) {
    return false;
  }
  lastPrinted = node.value;
  return validateBST(node.right);
}

console.log('minimal tree: ');
let sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let minimalTreeResult = minimalTree(sortedArray);
console.log(minimalTreeResult.root.left.left.value);
// minimalTreeResult.inOrderTraversal(minimalTreeResult.root);

console.log('list of depths: ');
minimalTreeResult.listOfDepths(minimalTreeResult.root);

console.log('is balanced: ');
let height = minimalTreeResult.getHeights(minimalTreeResult.root);
let isBalanced = minimalTreeResult.isBalanced(minimalTreeResult.root);
console.log('height: ', height);
console.log('is balanced?', isBalanced);
let inBalancedTree = new BinaryTree();
inBalancedTree.insert(6).insert(5).insert(4);
console.log('is balanced?', inBalancedTree.isBalanced(inBalancedTree.root));
console.log('validate binary search tree: ');
console.log(validateBST(inBalancedTree.root));
