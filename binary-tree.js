// let treeElements = [5, 12, 2, 7, 3, 4, 11, 19, 13, 6];
let treeElements = [5, 12, 4];
let tree = [];
function binaryTree (elements) {
  elements.forEach(function (num, index) {
    if (index == 0) {
      tree.push(num);
    } else {
      tree.forEach(function (e) {
        if (e < num && e[0] == null) {
          tree[0].push(num);
        }
      })
    }
  })
}
// function pushElement(curElement, num) {
//   if (curElement < num) {
//
//   } else {
//
//   }
// }

/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}



const bst = new BST();

// bst.add(9);
// bst.add(4);
// bst.add(17);
// bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);