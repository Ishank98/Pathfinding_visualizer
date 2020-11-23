var wallnodes = [];
var fake_grid = [];
function makefakegrid(grid, startNode, finishNode) {
  const fake = [];
  for (let j = 0; j < grid[0].length; j++) {
    fake.push(1);
  }
  for (let i = 0; i < grid.length; i++) {
    fake_grid.push(fake);
  }
  fake_grid[startNode.row][startNode.col] = 0;
  fake_grid[finishNode.row][finishNode.col] = 0;
}
export function recursiveDivisionMaze(grid, startNode, finishNode) {
  makefakegrid(grid, startNode, finishNode);
  let j = 1000;
  let i = 0;
  while (i < j) {
    let x = Math.floor(Math.random() * 25);
    let y = Math.floor(Math.random() * 61);
    if (x < grid.length && y < grid[0].length && fake_grid[x][y]) {
      console.log(x, y);
      i++;
      wallnodes.push(grid[x][y]);
    }
  }
  return grid;
}
export function getwallnodes() {
  return wallnodes;
}
