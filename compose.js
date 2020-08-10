// const compose = arrFns => initValue => {
//   let index = 0;
//   const next = value => {
//     if (index < arrFns.length) {
//       index++;
//       return arrFns[index - 1](value, next);
//     }
//     return value;
//   };
//   return next(initValue);
// };



// console.log(compose(
//   [
//     (data, next) => {
//       console.log(data);
//       next(2)
//       console.log(5);
//     },
//     (data, next) => {
//       console.log(data);
//       return next(3)
//     },
//     (data, next) => {
//       console.log(data);
//       return next(4);
//     },
//   ]
// )(1));

const compose = (mids) => {
  return async function () {
    const args = arguments;
    dispatch(0);
    async function dispatch(i) {
      const fn = mids[i];
      if (!fn) return null;
      await fn(function next() {
        dispatch(i + 1);
      }, ...args);
    }
  }
}

let middleware = []
middleware.push((next) => {
  console.log(0)
  next()
  console.log(3)
})
middleware.push((next) => {
  console.log(1)
  next()
  console.log(1.1)
})
middleware.push(() => {
  console.log(2)
})

let fn = compose(middleware)
fn()

