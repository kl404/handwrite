let timeId = null;

function mySetInterval(callback, delay, ...args) {
  let fn = function () {
    timeId = setTimeout(() => {
      callback.call(this, args);
      //延时，并执行回调函数
      fn();
    }, delay);
  };
  fn();
}

function myClearInterval(id) {
  clearInterval(timeId);
}

// 测试代码
mySetInterval(
  (name) => {
    console.log(name);
  },
  1000,
  "weqwe"
);

