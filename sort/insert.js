let arr = [35, 6, 12, 1, 96, 37, 25, 7, 4, 34];

function insert(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('\nbefore=======\n', arr, i + 1);
    for (let j = i + 1; (j > 0 && (arr[j] < arr[j - 1])); j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      console.log('middle ', arr, j);
    }
    console.log('after=======\n', arr);
  }
  return arr;
}

console.log(insert(arr));