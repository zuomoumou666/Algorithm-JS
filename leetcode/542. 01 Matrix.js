// 542. 01 Matrix
// Medium

// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.



// Example 1:

// Input:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]

// Output:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]
// Example 2:

// Input:
// [[0,0,0],
//  [0,1,0],
//  [1,1,1]]

// Output:
// [[0,0,0],
//  [0,1,0],
//  [1,2,1]]


// Note:

// The number of elements of the given matrix will not exceed 10,000.
// There are at least one 0 in the given matrix.
// The cells are adjacent in only four directions: up, down, left and right.

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var updateMatrix = function (matrix) {
//   const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
//   const getByPos = (x, y) => (matrix[x] && matrix[x][y] !== undefined) ? matrix[x][y] : null;
//   const findDistance = (i, j) => {
//     const queue = [[i, j]];
//     const map = {};
//     let move = 0;
//     let len = queue.length;
//     while (queue.length) {
//       --len;
//       const [a, b] = queue.shift();
//       map[`${a}${b}`] = true;
//       if (matrix[a][b] === 0) return move;
//       for (let k = 0; k < directions.length; k++) {
//         const [x, y] = directions[k];
//         if (getByPos(x + a, y + b) !== null && !map[`${x + a}${y + b}`]) queue.push([x + a, y + b]);
//       }
//       if (len === 0) {
//         ++move;
//         len = queue.length;
//       }
//     }
//     return Infinity;
//   };
//   return matrix.map((m, i) => m.map((a, j) => findDistance(i, j)));
// };

var updateMatrix = function (matrix) {
  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const getByPos = (x, y) => (matrix[x] && matrix[x][y] !== undefined) ? matrix[x][y] : null;
  const queue = [];
  matrix.forEach((r, i) => r.forEach((c, j) => {
    if (c === 0) {
      queue.push([i, j, c]);
    } else {
      matrix[i][j] = Infinity;
    }
  }));
  while (queue.length) {
    const [a, b, v] = queue.shift();
    if (matrix[a][b] > v) {
      matrix[a][b] = v;
    }

    for (let k = 0; k < directions.length; k++) {
      const [x, y] = directions[k];
      if (getByPos(x + a, y + b) === Infinity) {
        queue.push([x + a, y + b, v + 1]);
      }
    }
  }
  return matrix;
};



// const matrix = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0]];
const matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

console.log(JSON.stringify(updateMatrix(matrix)));