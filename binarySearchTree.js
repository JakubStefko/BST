class BinarySearchTree extends BinaryTree {
  constructor() {
    super() // super is necessary if class extands to use 'this'
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

  min () {
    if (this.isEmpty()) { return 'Empty tree' }
    else {
      let current = this.root
      while (current.left) {
        current = current.left
      }
      return current.key
    }
  }

  max () {
    if (this.isEmpty()) { return 'Empty tree' }
    else {
      let current = this.root
      while (current.right) {
        current = current.right
      }
      return current.key
    }
  }

  showAll() {
    if (this.isEmpty()) { console.log('AntyBinarySearchTree is empty') }
    else { console.log('Anty Binary Search Tree: ', this.root) }
  }
}