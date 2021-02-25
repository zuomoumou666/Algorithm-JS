// 146. LRU Cache
// Medium

// 7855

// 321

// Add to List

// Share
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?



// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 3000
// 0 <= value <= 104
// At most 3 * 104 calls will be made to get and put.


// /**
//  * @param {number} capacity
//  */
// var LRUCache = function (capacity) {
//   this.capacity = capacity;
//   this.data = {};
//   this.orders = [];
//   this.count = 0;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   if (this.data[key] !== undefined) {
//     this.updateOrders(key);
//     return this.data[key];
//   }
//   return -1;
// };

// LRUCache.prototype.updateOrders = function (key) {
//   const i = this.orders.findIndex(v => v === key);
//   this.orders.unshift(key);
//   return this.orders.splice(i + 1, 1);
// }

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   if (this.data[key] !== undefined) {
//     this.updateOrders(key);
//     this.data[key] = value;
//   } else {
//     if (this.count < this.capacity) {
//       this.count++;
//       this.data[key] = value;
//       this.orders.unshift(key);
//     } else {
//       const k = this.orders.pop();
//       delete this.data[k];
//       this.data[key] = value;
//       this.orders.unshift(key);
//     }
//   }
// };

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */



class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  };

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
  };
}


const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
// return 1
console.log("🚀 ~ file: 637. Average of Levels in Binary Tree copy.js ~ line 116 ~ lRUCache.get(1)", lRUCache.get(1))
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// returns -1 (not found)
console.log("🚀 ~ file: 637. Average of Levels in Binary Tree copy.js ~ line 119 ~ lRUCache.get(2)", lRUCache.get(2))
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// return -1 (not found)
console.log("🚀 ~ file: 637. Average of Levels in Binary Tree copy.js ~ line 122 ~ lRUCache.get(1)", lRUCache.get(1))
// return 3
console.log("🚀 ~ file: 637. Average of Levels in Binary Tree copy.js ~ line 124 ~ lRUCache.get(3)", lRUCache.get(3))
console.log("🚀 ~ file: 637. Average of Levels in Binary Tree copy.js ~ line 125 ~ lRUCache.get(4)", lRUCache.get(4))
    // return 4