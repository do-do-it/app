// 创建节点
function Node(key) {
  this.key = key
  this.left = null
  this.right = null
}

// 创建二叉树
export default class TwoForkTree {
  constructor(args) {
    var root = null
    for (let i = 0; i < args.length; i++) {
      const newNode = new Node(args[i])
      if (root === null) {
        root = newNode
      } else {
        this.insertNode(root, newNode)
      }
    }
    this.root = root
  }
  // 插入节点
  insertNode(node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
}


