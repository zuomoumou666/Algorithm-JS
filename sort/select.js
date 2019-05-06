let arr = [35, 6, 12, 1, 96, 37, 25, 7, 4, 34];

function select(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    console.log('\nbefore=======\n', arr, arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      console.log('middle ', arr[j], arr[index]);

      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
    console.log('after=======\n', arr);
  }
  return arr;
}

console.log(select(arr));