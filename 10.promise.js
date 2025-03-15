// 实现 Promise.all
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    // 遍历处理每个 promise
    promises.forEach((promise, index) => {
      // 确保元素都转化为 Promise
      Promise.resolve(promise).then(
        (value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        },
        (error) => reject(error)
      );
    });
  });
};


Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let count = 0;
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        // 任何一个成功，整个 Promise 就成功
        (value) => {
          resolve(value);
        },
        // 失败的情况，需要收集错误
        (error) => {
          errors[index] = error;
          count++;
          // 只有当所有的 promise 都失败时，才返回失败
          if (count === promises.length) {
            reject(new AggregateError(errors, 'All promises were rejected'));
          }
        }
      );
    });
  });
};



// 实现 Promise.race
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(
        // 成功的回调：当 promise 成功时，用它的值调用外层的 resolve
        (value) => {
          resolve(value);
        },
        // 失败的回调：当 promise 失败时，用它的错误调用外层的 reject
        (error) => {
          reject(error);
        }
      );
    });
  });
};

