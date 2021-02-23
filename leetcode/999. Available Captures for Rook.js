// 999. Available Captures for Rook
// Easy

// On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

// The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

// Return the number of pawns the rook can capture in one move.



// Example 1:



// Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: 
// In this example the rook is able to capture all the pawns.
// Example 2:



// Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 0
// Explanation: 
// Bishops are blocking the rook to capture any pawn.
// Example 3:



// Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: 
// The rook can capture the pawns at positions b5, d6 and f5.


// Note:

// board.length == board[i].length == 8
// board[i][j] is either 'R', '.', 'B', or 'p'
// There is exactly one cell with board[i][j] == 'R'


/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  let captures = 0;
  const root = [];
  for (let i = 0; i < board.length; i++) {
    let j = board[i].indexOf('R');
    if (j >= 0) {
      root.push(i, j);
      break
    }
  }
  for (let d = 0; d < directions.length; d++) {
    const [i, j] = directions[d];
    let row = i + root[0], col = j + root[1];
    while (row >= 0 && row < 8 && col >= 0 && col < 8) {
      const cur = board[row][col];
      if (cur === 'B' || cur === 'p') {
        if (cur === 'p') captures++;
        break;
      }
      row += i;
      col += j;
    }
  }
  return captures;
};


// const board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]];
// Output: 3
// const board =  [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]];
// Output: 0
const board =  [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]];
// Output: 3




console.log(numRookCaptures(board));