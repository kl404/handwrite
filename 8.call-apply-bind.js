Function.prototype.call = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("not a function");
  }
  // 保存this到selfFn
  const selfFn = this;
  // 使用普通属性替代Symbol
  context = context || window;
  const fn = "__fn__";
  context[fn] = selfFn;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};

Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("not a function");
  }
  // 保存this到selfFn
  const selfFn = this;
  return function (...newArgs) {
    return selfFn.call(context, ...args, ...newArgs);
  };
};
