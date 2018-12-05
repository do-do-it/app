function TwoForkTree(args) {
  var Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  var root = null
  var insertNode = function(node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
  args.forEach(key => {
    const newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  });
  this.root = root
}
TwoForkTree.prototype = {
  findNode(key) {
    let result = null
    function find(node, key) {
      if (node.key === key) {
        result = node
      } else if (node.key > key) {
        find(node.left, key)
      } else {
        find(node.right, key)
      }
    }
    find(this.root, key)
    return result
  }
}

const tree = new TwoForkTree([1, 2])
console.log(tree)
console.log(tree.findNode(2))