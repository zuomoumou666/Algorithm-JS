const arr = [1, 5, 3, 4, 6, 9, 7, 8, 1];

function main(arr) {
  if (!arr.length) return 0;
  let lens = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        lens[i] = Math.max(lens[j] + 1, lens[i]);
      };
    }
  }
  let result = lens[0];
  lens.forEach(i => {
    result = Math.max(i, result);
  });
  return result;
}


console.log(main(arr));