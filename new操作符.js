function myNew(Constructor, ...args) {
  // 1. 创建一个新对象，并将其原型指向构造函数的prototype
  const obj = Object.create(Constructor.prototype);

  // 2. 执行构造函数，并将this指向新对象
  const result = Constructor.apply(obj, args);

  // 3. 如果构造函数返回了一个对象，则返回该对象；否则返回新创建的对象
  return result instanceof Object ? result : obj;
}

// 测试代码
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};

// 使用示例
const person = myNew(Person, "张三", 25);
console.log(person); // Person { name: '张三', age: 25 }
person.sayHi(); // Hi, I'm 张三
