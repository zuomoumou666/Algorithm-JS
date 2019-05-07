/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let amount = 0;
  nums.forEach(n => amount += n);
  const target = amount / 2;
  if (target % 1 !== 0) return false;
  const arr = new Array(target).fill(false);
  const allAmount = [];

  for (let i = 0; i < nums.length; i++) {
    const len = allAmount.length;
    if (nums[i] === target) return true;
    for (let j = 0; j < len; j++) {
      const val = allAmount[j] + nums[i];
      if (val === target) {
        return true
      };
      addToAllAmount(val);
    }

    addToAllAmount(nums[i]);
  }

  function addToAllAmount(val) {
    if (val < target && !arr[val - 1]) {
      allAmount.push(val);
      arr[val - 1] = true;
    }
  }

  console.log(target, arr, allAmount);
  return arr[arr.length - 1];
};

var canPartition2 = function (nums) {
  let amount = 0;
  nums.forEach(n => amount += n);
  const target = amount / 2;
  if (target % 1 !== 0) return false;
  const arr = new Array(target).fill(false);
  arr[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j > 0; j--) {
      arr[j] = (arr[j] || arr[j - nums[i]]);
    }
  }
  return arr[target] || false;
};


const arr = [1, 1, 2, 5, 5, 5, 5];
// const arr = [1, 1];
// const arr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
// const arr = [1, 2, 5];
// const arr = [1, 5, 11, 5];
// 1
// 5 => 6
// 11 => 12 16 17

console.time('1');
console.log(canPartition2(arr));
console.timeEnd('1');