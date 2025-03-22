Function.prototype.call = function (context, ...args) {
  // 保存this到selfFn
  const selfFn = this;
  // 使用普通属性替代Symbol
  context = context || window;
  context['test'] = selfFn;
  const result = context['test'](...args);
  delete context['test'];
  return result;
};

Function.prototype.bind = function (context, ...args) {

  const selfFn = this;
  return function (...newArgs) {
    return selfFn.call(context, ...args, ...newArgs);
  };
};
