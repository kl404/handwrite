function sum(a, b, c, d) {
  return a + b + c + d;
}

// 无限参数
function curry1(callback) {
  let params = [];
  return function curried(...args) {
    if (!args.length) {
      const res = callback(...params);
      params = [];
      return res;
    } else {
      params = params.concat(args);
      return curried;
    }
  };
}

// 有限参数
function curry2(callback) {
  let params = [];
  let len = callback.length;
  return function curried(...args) {
    params = params.concat(args);
    if (params.length >= len) {
      const res = callback(...params);
      params = [];
      return res;
    } else {
      return curried;
    }
  };
}

// 测试 curry1 - 无限参数版本
function sum1(...args) {
  return args.reduce((a, b) => a + b, 0);
}

const curriedSum1 = curry1(sum1);
console.log(curriedSum1(1)(2)(3)(4)()); // 10
console.log(curriedSum1(1, 2)(3)(4)()); // 10
console.log(curriedSum1(1, 2, 3, 4)()); // 10

// 测试 curry2 - 固定参数版本
function sum2(a, b, c, d) {
  return a + b + c + d;
}

const curriedSum2 = curry2(sum2);
console.log(curriedSum2(1)(2)(3)(4)); // 10
console.log(curriedSum2(1, 2)(3, 4)); // 10
console.log(curriedSum2(1, 2, 3, 66)); // 10
