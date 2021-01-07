// function Promise(executor) {
//   const self = this;
//   self.value = null;
//   self.status = 'pending';
//   function resolve(d) {
//     self.value = d;
//     self.status = 'resolved';
//   }
//   function reject(e) {
//     self.value = e;
//     self.status = 'rejected';
//   }
//   executor(resolve, reject);
// }

// Promise.prototype.then = function (onResolve, onReject) {
//   switch (this.status) {
//     case 'resolved':
//       onResolve(this.value);
//       break;
//     case 'rejected':
//       onReject(this.value);
//       break;
//     default:
//       break;
//   }
//   return this;
// }


// const p = new Promise((rs, rj) => {
//   setTimeout(() => rs(1), 50);
// });

// p.then((d) => {
//   console.log(d);
// })

Function.prototype.bind2 = function (content) {
  if (typeof this != "function") {
    throw Error("not a function")
  }
  // 若没问参数类型则从这开始写
  let fn = this;
  let args = [...arguments].slice(1);

  let resFn = function () {
    return fn.apply(this instanceof resFn ? this : content, args.concat(...arguments))
  }
  function tmp() { }
  tmp.prototype = this.prototype;
  resFn.prototype = new tmp();

  return resFn;
}

function a() {
  console.log(this.z);
}


b = a.bind2({ z: 1 });
b();