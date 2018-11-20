function isBST (tree) {
  if(tree.isEmpty()) { return 'It is empty tree you dumbass -.-' }
  else {
    let nodeList = []
    nodeList.push(tree.root)
    do {
      current = nodeList.shift()
      if (typeof current.left !== 'undefined') {
        if (current.left.key < current.key) { nodeList.push(current.left) }
        else { return false }
      }
      if (typeof  current.right !== 'undefined') {
        if (current.right.key >= current.key) { nodeList.push(current.right) }
        else { return false }
      }
    } while (nodeList.length)
    return true
  }
}