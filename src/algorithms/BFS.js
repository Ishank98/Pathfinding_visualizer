// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.

const visitedNodesInOrder = [];
function breathfirstsearch(grid, startNode, finishNode) {
  const unvisitednodes = [];
  unvisitednodes.push(startNode);
  while (unvisitednodes.length > 0) {
    var node = unvisitednodes[0];
    unvisitednodes.shift();
    node.isVisited = true;
    if (node.isWall) continue;
    visitedNodesInOrder.push(node);
    if (node === finishNode) return;
    const { row, col } = node;
    if (row > 0 && grid[row - 1][col].isVisited === false) {
      grid[row - 1][col].isVisited = true;
      grid[row - 1][col].previousNode = node;

      unvisitednodes.push(grid[row - 1][col]);
    }
    if (col > 0 && grid[row][col - 1].isVisited === false) {
      grid[row][col - 1].isVisited = true;
      grid[row][col - 1].previousNode = node;
      unvisitednodes.push(grid[row][col - 1]);
    }
    if (row < grid.length - 1 && grid[row + 1][col].isVisited === false) {
      grid[row + 1][col].isVisited = true;
      grid[row + 1][col].previousNode = node;

      unvisitednodes.push(grid[row + 1][col]);
    }
    if (col < grid[0].length - 1 && grid[row][col + 1].isVisited === false) {
      grid[row][col + 1].isVisited = true;
      grid[row][col + 1].previousNode = node;

      unvisitednodes.push(grid[row][col + 1]);
    }
  }
}
export function BFS(grid, startNode, finishNode) {
  startNode.distance = 0;
  breathfirstsearch(grid, startNode, finishNode);
  return visitedNodesInOrder;
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrderBFS(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
