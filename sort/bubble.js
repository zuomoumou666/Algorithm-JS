let arr = [35, 6, 12, 1, 96, 37, 25, 7, 4, 34];

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('\nbefore=======\n', arr);
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
      console.log('middle ', arr);
    }
    console.log('after=======\n', arr);
  }
  return arr;
}

console.log(bubble(arr));