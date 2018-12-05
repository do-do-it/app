function twoForkTree(args) {
  var Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  var root = null
  var insertNode = function(node, newNode) {
    if (node.key > newNode.key) {
      insertNode(node.left, newNode)
    } else {
      insertNode(node.right, newNode)
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
  return root
}

console.log(twoForkTree([1, 2]))