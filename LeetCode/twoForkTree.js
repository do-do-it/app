function twoForkTree(args) {
  var Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  var root = null
  var insertNode = function(node, key) {
    if (node === null) {
      node = new Node(key)
    } else if (node.key > key) {
      insertNode(node.left, key)
    } else {
      insertNode(node.right, key)
    }
  }
  args.forEach(key => {
    if (root === null) {
      root = new Node(key)
    } else {
      insertNode(root, key)
    }
  });
  return root
}

console.log(twoForkTree([1, 2]))