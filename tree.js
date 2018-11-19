class BinaryTree {
  constructor() {
    this.items = []
  }

  isEmpty () {
    return this.items.length === 0
  }

  add(key, left = null, right = null) {
    let node = new Node(key, left, right)
    this.items.push(node)
    node = new Node(left)
    this.items.push(left)
    node = new Node(right)
    this.items.push(right)
    node.left = this.items[this.items.length -2]
    node.right = this.items[this.items.length -1]
  }

  getLeft(node) {
    return node.left === null ? null : node.left
  }

  getRight(node) {
    return node.right === null ? null : node.left
  }

  showAll() {
    if (this.isEmpty()) {
      console.log('BinaryTree is empty')
    } else { console.log('Binary Tree: ', this.items) }
  }
}