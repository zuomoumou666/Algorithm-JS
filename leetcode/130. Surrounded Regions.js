// 130. Surrounded Regions
// Medium

// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example:

// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X
// Explanation:

// Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.



/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function (board) {
//   const rowLen = board.length;
//   const map = [];
//   const DIRS = [[0, 1],
// [0, -1],
//   [1, 0],
//   [-1, 0]];
//   const find = (node, up = true) => {
//     let target = node;
//     if (!target) return node;
//     const key = up ? 'parent' : 'children';
//     while (target[key]) {
//       target = target[key];
//     }
//     return target;
//   };

//   function get(target, paths) {
//     let result = target;
//     let path = paths.shift();
//     while (path !== undefined && result) {
//       result = result[path];
//       path = paths.shift();
//     }
//     return result;
//   }

//   const getLeft = (row, col) => target => get(target, [row, col - 1]);
//   const getTop = (row, col) => target => get(target, [row - 1, col]);
//   const updateChainToNotSurrounded = node => {
//     let cur = node;
//     while (cur && cur.surrounded) {
//       cur.surrounded = false;
//       cur = cur.parent;
//     }
//   };
//   const connect = (row, col, isEdge) => {
//     console.log(row, col);
//     const left = getLeft(row, col);
//     const top = getTop(row, col);
//     if (left(board) !== 'O' && top(board) !== 'O') return map[row][col] = {
//       id: `${row}-${col}`,
//       surrounded: !isEdge,
//     };
//     const leftMap = left(map);
//     const topMap = top(map);

//     let target = null;
//     if (leftMap && topMap) {
//       const rootLeft = find(leftMap);
//       const rootTop = find(topMap);
//       const childLeft = find(leftMap, false);
//       const childTop = find(topMap, false);
//       if (rootLeft !== rootTop) {
//         if (!rootLeft.surrounded || !rootTop.surrounded) {
//           updateChainToNotSurrounded(childTop);
//           updateChainToNotSurrounded(childLeft);
//         }
//         rootLeft.parent = childTop;
//         childTop.children = rootLeft;
//         target = childLeft;
//       } else {
//         target = childLeft || childTop;
//       }
//     } else {
//       target = find(leftMap, false) || find(topMap, false);
//     }
//     map[row][col] = {
//       id: `${row}-${col}`,
//       parent: target,
//       surrounded: isEdge ? !isEdge : target.surrounded,
//     };
//     target.children = map[row][col];
//     if (isEdge) {
//       updateChainToNotSurrounded(target);
//     }
//   };

//   for (let row = 0; row < rowLen; row++) {
//     const curRow = board[row];
//     const colLen = curRow.length;
//     map.push(new Array(colLen).fill(null));
//     for (let col = 0; col < colLen; col++) {
//       const element = curRow[col];
//       if (element === 'X') continue;
//       const isEdge = row === 0 || col === 0 || row === rowLen - 1 || col === colLen - 1;
//       connect(row, col, isEdge);
//     }
//   }
//   for (let i = 0; i < map.length; i++) {
//     const row = map[i];
//     for (let j = 0; j < row.length; j++) {
//       const target = row[j];
//       if (target && target.surrounded) {
//         board[i][j] = 'X'
//       };
//     }
//   }
//   return null;
// };
// var solve = function (board) {
//   const rowLen = board.length;
//   if (!board || !rowLen) return;
//   const colLen = board[0].length;
//   const BORDER = 'border';
//   const DIRS = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0],
//   ];
//   const uf = new UnionFind(board);
//   for (let row = 0; row < rowLen; row++) {
//     const curRow = board[row];
//     for (let col = 0; col < colLen; col++) {
//       const element = curRow[col];
//       if (element === 'X') continue;
//       const id = `${row}-${col}`;
//       const isEdge = row === 0 || col === 0 || row === rowLen - 1 || col === colLen - 1;
//       if (isEdge) {
//         uf.union(BORDER, id);
//       }
//       for (let dir of DIRS) {
//         const x = row + dir[0];
//         const y = col + dir[1];
//         if (
//           x >= 0
//           && y >= 0
//           && x < rowLen
//           && y < colLen
//           && board[x][y] === 'O'
//         ) uf.union(id, `${x}-${y}`);
//       }
//     }
//   }

//   for (let i = 0; i < rowLen; i++) {
//     for (let j = 0; j < colLen; j++) {
//       if (board[i][j] === 'O' && uf.find(`${i}-${j}`) !== uf.find(BORDER)) {
//         board[i][j] = 'X';
//       }
//     }
//   }
// };

// function UnionFind(board) {
//   const map = { border: 'border' };

//   for (let x = 0; x < board.length; x++) {
//     for (let y = 0; y < board[0].length; y++) {
//       if (board[x][y] === 'O') {
//         let id = `${x}-${y}`;
//         map[id] = id;
//       }
//     }
//   }
//   this.map = map;
//   this.find = (x) => {
//     if (map[x] === x) return x;
//     map[x] = this.find(map[x]);
//     return map[x];
//   };
//   this.union = (x, y) => {
//     const rootX = this.find(x);
//     const rootY = this.find(y);
//     if (rootX !== rootY) map[rootX] = rootY;
//   };
// }

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rowLen = board.length;
  if (!board || !rowLen) return;
  const colLen = board[0].length;
  const loop = a => {
    for (let row = 0; row < rowLen; row++) {
      for (let col = 0; col < colLen; col++) {
        a && a(row, col);
      }
    }
  }

  loop((x, y) => {
    const isEdge = x === 0 || y === 0 || x === rowLen - 1 || y === colLen - 1;
    if (isEdge) {
      dfs(x, y);
    }
  })

  function dfs(x, y) {
    const DIRS = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    if (
      x < 0 || y < 0
      || x >= rowLen || y >= colLen
      || board[x][y] === 'I'
      || board[x][y] === 'X'
    ) return;
    board[x][y] = 'I';
    for (let dir of DIRS) {
      const nX = x + dir[0];
      const nY = y + dir[1];
      dfs(nX, nY);
    }
  }
  loop((x, y) => {
    board[x][y] = board[x][y] === 'I' ? 'O' : 'X';
  })
}


// const testCase = [
//   ["X", "X", "X", "X"],
//   ["X", "O", "X", "O"],
//   ["X", "O", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "X", "X"],
// ];

const testCase = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"]
]
// [
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "X", "X", "X"]
// ]
// [
//   ["X", "X", "X", "X"],
//   ["X", "X", "X", "X"],
//   ["X", "X", "X", "X"],
//   ["X", "O", "X", "X"]
// ]

solve(testCase);
console.log("testCase", testCase);
