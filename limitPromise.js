// const limitPromise = max => {
//   const fns = [];
//   let index = 0;
//   let limit = max;
//   return function call(fn) {
//     fns.push(fn);
//     const run = () => {
//       if (index < limit) {
//         console.log('start', index);
//         fns[index].then(
//           (n) => {
//             console.log("run -> n", n)
//           })
//           .finally(() => {
//             if (limit < fns.length) limit++;
//             run();
//           });
//         index++;
//       }
//     };
//     run();
//   };
// }


// const arr = (new Array(100)).fill(undefined).map((v, index) => {
//   return new Promise((rs, rj) => {
//     setTimeout(() => {
//       rs(index);
//     }, 50)
//   });
// })








// const limit = limitPromise(2);
// arr.forEach(a => limit(a));
let i = 0
const newP = bool => new Promise((rs, rj) => {
  setTimeout(() => {
    if (bool) {
      rs(i++)
    } else {
      rj(i++);
    }
  }, 50);
});

const a = Promise.all([newP(1), newP()]).then(console.log).catch(e => console.error('e', e));