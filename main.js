function treeDumbFill (treeName) {
  treeName.add(0)
  treeName.add(1)
  treeName.add(2)
  treeName.add(3)
  treeName.add(4)
  treeName.add(5)
  treeName.add(6)
  treeName.add(7)
  treeName.add(5)
  treeName.add(6)
  treeName.add(7)
}

var start = document.getElementById('start')
start.addEventListener('click', () => {

  const binaryTree = new BinaryTree()
  const binarySearchTree = new BinarySearchTree()
  const antyBinarySearchTree = new AntyBinarySearchTree()

  treeDumbFill(binaryTree)
  treeDumbFill(binarySearchTree)
  treeDumbFill(antyBinarySearchTree)

  // binaryTree.showAll()
  // binarySearchTree.showAll()
  // antyBinarySearchTree.showAll()

  // console.log('Is our Binary Tree a BST: ', isBST(binaryTree))
  // console.log('Is our Binary Search Tree a BST: ', isBST(binarySearchTree))
  // console.log('Is our Anty Binary Search Tree a BST: ', isBST(antyBinarySearchTree))

  console.log(binarySearchTree.min())
  console.log(binarySearchTree.max())

  console.log(antyBinarySearchTree.min())
  console.log(antyBinarySearchTree.max())

  console.log(binarySearchTree.search(4))
  console.log(antyBinarySearchTree.search(4))

  console.log(binarySearchTree.search(10))
  console.log(antyBinarySearchTree.search(10))
})