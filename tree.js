class BinaryTree {
  constructor() {
    this.root = undefined
  }

  isEmpty () {
    return (typeof this.root === 'undefined')
  }

  add(key) {
    let node = new Node(key)
    
    if (this.isEmpty()) {
      this.root = node
    } else {
      let current = this.root
      let contain = false
      
      while (!contain) {
        if (current.key > key) {
          if (typeof current.left === 'undefined') {
            current.left = node
            contain = true
          } else { current = current.left }
        } else {
          if (typeof current.right === 'undefined') {
            current.right = node
            contain = true
          } else { current = current.right }
        }
      }
    }
  }

  height() {
    if (this.isEmpty()) { return 0 }
    else {
      let h = 1
      let nodeList = []
      let current
      nodeList.push({node: this.root, height: h})
      do {
        current = nodeList.shift()
        if (current.height > h) {
          h = current.height
        }
        if (typeof current.node.left !== 'undefined') {
          nodeList.push({ node: current.node.left, height: current.height + 1 })
        } else if (typeof current.node.right !== 'undefined') {
          nodeList.push({ node: current.node.right, height: current.height + 1 })
        }
      } while( nodeList.length )
      return h
    }
  }

  getLeft(node) {
    return typeof node.left === 'undefined' ? undefined : node.left.priority
  }

  getRight(node) {
    return typeof node.right === 'undefined' ? undefined : node.right.priority
  }

  showAll() {
    if (this.isEmpty()) { console.log('BinaryTree is empty') }
    else { console.log('Binary Tree: ', this.root) }
  }
}