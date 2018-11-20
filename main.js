var start = document.getElementById('start')
start.addEventListener('click', () => {
  const tree = new BinaryTree()
  tree.add(2)
  console.log(tree.height())
  tree.add(3)
  tree.showAll()
})