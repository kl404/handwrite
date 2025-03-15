// 1. 存储副作用函数的桶
const bucket = new Set();
// 2. 用于存储当前正在执行的副作用函数
let activeEffect = null;
// 3. 创建响应式数据
const data = new Proxy(
  { text: "hello" },
  {
    // 读取数据时收集依赖
    get(target, key) {
      if (activeEffect) {
        bucket.add(activeEffect);
      }
      return target[key];
    },
    // 修改数据时触发更新
    set(target, key, value) {
      target[key] = value;
      // 执行桶中的所有副作用函数
      bucket.forEach((fn) => fn());
      return true;
    },
  }
);
// 4. 注册副作用函数的方法
function effect(fn) {
  activeEffect = fn;
  fn(); // 执行副作用函数
  activeEffect = null;
}
// 5. 测试使用
effect(() => {
  console.log("数据更新了:", data.text);
});

// 修改数据，会自动触发上面的副作用函数
data.text = "world";
