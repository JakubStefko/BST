class AntyBinarySearchTree extends BinaryTree {
  constructor() {
    super()
  }

  add(key) {
    let node = new Node(key)
    
    if (this.isEmpty()) {
      this.root = node
    } else {
      let current = this.root
      let contain = false
      
      while (!contain) {
        if (current.key < key) {
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

  showAll() {
    if (this.isEmpty()) { console.log('BinarySearchTree is empty') }
    else { console.log('Binary Search Tree: ', this.root) }
  }
}