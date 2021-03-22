// 1232. Check If It Is a Straight Line
// Easy

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.





// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false


// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const [[x, y], [x1, y1], ...rest] = coordinates;
  let fn = () => false;
  if (x === x1) {
    fn = (x2, y2) => x === x2;
  } else if (y === y1) {
    fn = (x2, y2) => y === y2;
  } else {
    const a = (y - y1) / (x - x1);
    const b = y - a * x;
    fn = (x2, y2) => y2 === a * x2 + b;
  }
  return rest.every(([x2, y2]) => fn(x2, y2));
};

// line: y - ax = b;
// line: y = ax + b;
// line: y = ax + y1 - ax1;
// a = (y - y1) / (x - x1);



const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
// Output: true
// const coordinates = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]];
// Output: false
// const coordinates = [[0, 0], [0, 1], [0, -1]];
// true
// const coordinates = [[2, 4], [2, 5], [2, 8]]
// true
// const coordinates = [[0, 0], [0, 5], [5, 5], [5, 0]]
// false

// 2 = a + b
// 3 = 2a + 2-a
// a=1,b=1;

console.log(checkStraightLine(coordinates));