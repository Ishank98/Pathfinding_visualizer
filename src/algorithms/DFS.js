const visitedNodesInOrder = [];
var check = 0;
function depthfirstsearch(grid, node, startNode, finishNode) {
  const { row, col } = node;
  node.isVisited = true;
  visitedNodesInOrder.push(node);
  if (check || node === finishNode) {
    check = 1;
    return;
  }
  if (
    row > 0 &&
    grid[row - 1][col].isVisited === false &&
    grid[row - 1][col].isWall === false
  ) {
    grid[row - 1][col].previousNode = node;
    depthfirstsearch(grid, grid[row - 1][col], startNode, finishNode);
  }
  if (
    col < grid[0].length - 1 &&
    grid[row][col + 1].isVisited === false &&
    grid[row][col + 1].isWall === false
  ) {
    grid[row][col + 1].previousNode = node;
    depthfirstsearch(grid, grid[row][col + 1], startNode, finishNode);
  }
  if (
    row < grid.length - 1 &&
    grid[row + 1][col].isVisited === false &&
    grid[row + 1][col].isWall === false
  ) {
    grid[row + 1][col].previousNode = node;
    depthfirstsearch(grid, grid[row + 1][col], startNode, finishNode);
  }
  if (
    col > 0 &&
    grid[row][col - 1].isVisited === false &&
    grid[row][col - 1].isWall === false
  ) {
    grid[row][col - 1].previousNode = node;
    depthfirstsearch(grid, grid[row][col - 1], startNode, finishNode);
  }
}
export function DFS(grid, startNode, finishNode) {
  startNode.distance = 0;
  depthfirstsearch(grid, startNode, startNode, finishNode);
  return visitedNodesInOrder;
}

export function getNodesInShortestPathOrderDFS(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
