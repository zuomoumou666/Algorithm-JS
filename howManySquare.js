const len = 8;

function getAmount(len) {
  let result = 0;
  for (let i = 1; i <= len; i++) {
    result += (len - i + 1) * (len - i + 1);
  }
  return result;
}

console.log(getAmount(len));

// f(n) = n^2 + (n-1)^2 + ... + 1;
function getAmount2(len) {
  const arr = [1];
  for (let i = 2; i <= len; i++) {
    arr.push(arr[i - 2] + i * i);
  }
  return arr[len - 1];
}

console.log(getAmount2(len));