// 1401. Circle and Rectangle Overlapping
// Medium

// Given a circle represented as (radius, x_center, y_center) and an axis-aligned rectangle represented as (x1, y1, x2, y2), where (x1, y1) are the coordinates of the bottom-left corner, and (x2, y2) are the coordinates of the top-right corner of the rectangle.

// Return True if the circle and rectangle are overlapped otherwise return False.

// In other words, check if there are any point (xi, yi) such that belongs to the circle and the rectangle at the same time.


/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
  const height = y2 - y1;
  if (x_center <= x2 && x_center >= x1 && y_center <= y2 && y_center >= y1) return true;

  if (x_center <= x2 && x_center >= x1) {
    const within = somePointsInCircle([x_center, y1, x_center, y2], [x_center, y_center, radius]);
    if (within) return true;
  }
  if (y_center <= y2 && y_center >= y1) {
    const within = somePointsInCircle([x1, y_center, x2, y_center], [x_center, y_center, radius]);
    if (within) return true;
  }

  return somePointsInCircle(
    [
      x1, y1,
      x2, y2,
      x1, y1 + height,
      x2, y2 - height
    ],
    [x_center, y_center, radius]);
};

function somePointsInCircle(points, [x_center, y_center, radius]) {
  for (let i = 0, len = points.length; i < len; i += 2) {
    const distance = distanceBetween2Points(x_center, y_center, points[i], points[i + 1]);
    if (distance <= radius) return true;
  }
  return false;
}

function distanceBetween2Points(x, y, x1, y1) {
  return Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2));
}
// Input: radius = 1, x_center = 0, y_center = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
// Output: true
// Explanation: Circle and rectangle share the point (1,0) 

// Input: radius = 1, x_center = 0, y_center = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
// Output: true

// Input: radius = 1, x_center = 1, y_center = 1, x1 = -3, y1 = -3, x2 = 3, y2 = 3
// Output: true

// Input: radius = 1, x_center = 1, y_center = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
// Output: false
// const radius = 1, x_center = 0, y_center = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1;
// const radius = 1, x_center = 0, y_center = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1;
// const radius = 1, x_center = 1, y_center = 1, x1 = -3, y1 = -3, x2 = 3, y2 = 3;
const radius = 1, x_center = 1, y_center = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1;
const result = checkOverlap(radius, x_center, y_center, x1, y1, x2, y2);
console.log("result", result)


