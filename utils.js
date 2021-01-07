function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


function getList(arr, i = 0) {
  let cur = { val: arr[i] };
  const next = arr[i + 1] === undefined ? null : getList(arr, i + 1);
  cur.next = next;
  return cur;
};

function get(target, paths) {
  let result = target;
  let path = paths.shift();
  while (path !== undefined && result) {
    result = result[path];
    path = paths.shift();
  }
  return result;
}

const map = [[null, null, null, null], [null, null, null, null]];


const result = get(map, [0, 0]);

module.exports = {
  ListNode,
  getList,
  get,
};
