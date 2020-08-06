// 463. Island d
// Easy

// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.



// Example:

// Input:
const grid = [[0, 1, 0, 0],
              [1, 1, 1, 0],
              [0, 1, 0, 0],
              [1, 1, 0, 0]]

// const grid = [[0,1,1,0],
//  [0,0,0,0],
//  [0,1,0,0],
//  [1,1,0,0]]


// const grid = [[1,0,1,0],
//               [1,1,1,0],
//               [0,1,0,0],
//               [1,1,0,0]]

// const grid = [[1, 1, 1, 0],
//               [1, 0, 1, 0],
//               [1, 1, 1, 0],
//               [0, 0, 0, 0]]

// Output: 16

// Explanation: The perimeter is the 16 yellow stripes in the image below:

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  let result = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const isIsland = grid[i][j] === 1;
      if (!isIsland) continue;
      result += 4;

      if ((i < rows - 1) && grid[i + 1][j]) result -= 1;
      if ((j < columns - 1) && grid[i][j + 1]) result -= 1;
      if (i > 0 && grid[i - 1][j]) result -= 1;
      if (j > 0 && grid[i][j - 1]) result -= 1;
    }
  }
  return result;
};


console.log(islandPerimeter(grid));