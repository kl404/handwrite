class EventEmitter {
  constructor() {
    // 存储事件和对应的处理函数
    this.events = new Map();
  }
  
  // 订阅事件
  on(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);
  }
  // 取消订阅
  off(eventName, callback) {
    if (!this.events.has(eventName)) return;
    if (!callback) {
      // 如果没有提供回调函数，则移除该事件的所有监听器
      this.events.delete(eventName);
      return;
    }
    // 移除特定的回调函数
    const callbacks = this.events.get(eventName);
    const index = callbacks.indexOf(callback);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
    // 如果没有回调函数了，则删除该事件
    if (callbacks.length === 0) {
      this.events.delete(eventName);
    }
  }
  // 触发事件
  emit(eventName, ...args) {
    if (!this.events.has(eventName)) return;
    const callbacks = this.events.get(eventName);
    callbacks.forEach((callback) => {
      callback(...args);
    });
  }
  // 只订阅一次
  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}

// 使用示例
const eventBus = new EventEmitter();

// 订阅事件
const handler = (data) => {
  console.log("收到数据:wyfissb");
};
eventBus.on("dataChange", handler);

// 发布事件
// eventBus.emit("dataChange", { message: "数据已更新" });

eventBus.emit('dataChange')
// 取消订阅
// eventBus.off("dataChange", handler);

// 测试 once 方法
// eventBus.once("oneTimeEvent", (data) => {
//   console.log("这个事件只会触发一次:", data);
// });

// eventBus.emit("oneTimeEvent", { message: "一次性事件" });
// eventBus.emit("oneTimeEvent", { message: "这条消息不会被处理" });
