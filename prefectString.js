function perfectSubstring(s, k) {
  let result = 0;
  const len = s.length;
  if (k <= 0 || len === 0) return result;
  if (k === 1) return len;
  for (let i = 0; i <= len - k; i++) {
    const map = {};
    let index = i;
    while (index < len) {
      let curStr = s[index];
      map[curStr] = map[curStr] ? map[curStr] + 1 : 1;
      if (map[curStr] > k) break;
      index++;
      curStr = s[index];
      const isPerfectNow = Object.values(map).every(time => time === k);

      if (isPerfectNow) {
        console.log(JSON.stringify(map));
        result++;
      }
    }
  }
  return result;
}

console.log(perfectSubstring('1102021222', 2));


// 11
// 110202
// 102021
// 0202
// 22
// 22