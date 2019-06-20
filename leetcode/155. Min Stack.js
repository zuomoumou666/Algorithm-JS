// 155. Min Stack
// Easy

// 1823

// 189

// Favorite

// Share
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
// var MinStack = function () {
//   this.queue = [];
//   this.temp = [];
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//   this.queue.push(x);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   let first = this.queue.shift();
//   let next = this.queue.shift();
//   while (first !== undefined) {
//     if (next !== undefined) {
//       this.temp.push(first);
//       first = next;
//       next = this.queue.shift();
//     } else {
//       next = first;
//       first = undefined;
//     }
//   }
//   this.queue = this.temp;
//   this.temp = [];
//   return next;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   let first = this.queue.shift();
//   let next = this.queue.shift();
//   while (first !== undefined) {
//     if (next !== undefined) {
//       this.temp.push(first);
//       first = next;
//       next = this.queue.shift();
//     } else {
//       this.temp.push(first);
//       next = first;
//       first = undefined;
//     }
//   }
//   this.queue = this.temp;
//   this.temp = [];
//   return next;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   let min = Infinity;
//   let first = this.queue.shift();
//   while (first !== undefined) {
//     min = Math.min(min, first);
//     this.temp.push(first);
//     first = this.queue.shift();
//   }
//   this.queue = this.temp;
//   this.temp = [];
//   return min;
// };
var MinStack = function () {
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = Infinity;
  let len = this.stack.length - 1;
  while (len >= 0) {
    min = Math.min(min, this.stack[len]);
    len--;
  }
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
const a = minStack.getMin();
minStack.pop();
const b = minStack.top();
const c = minStack.getMin();
console.log(a, b, c);

