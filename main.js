var start = document.getElementById('start')
start.addEventListener('click', () => {
  const tree = new BinaryTree()
  tree.add(0, 1, 1)
  tree.add(1, 1, 1)
  tree.add(1, 1)
  tree.add(2)
  tree.add(3)
  tree.showAll()
})