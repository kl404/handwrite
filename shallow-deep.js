function type(target) {
    return Object.prototype.toString
      .call(target)
      .split(" ")[1]
      .slice(0, -1)
      .toLowerCase();
  }
  
  function shallowClone(target) {
    if (target === null || typeof target !== "object") {
      return target;
    }
  
    const targetType = type(target);
    switch (targetType) {
      case "function":
        return target;
  
      case "array":
        return [...target];
  
      case "date":
        return new Date(target.getTime());
  
      case "regexp":
        return new RegExp(target.source, target.flags);
  
      case "map":
        return new Map(target);
  
      case "set":
        return new Set(target);
  
      case "object":
        const newObj = {};
        Object.keys(target).forEach((key) => {
          newObj[key] = target[ket];
        });
        Object.getOwnPropertySymbols(target).forEach((symbol) => {
          newObj[symbol] = target[symbol];
        });
  
      default:
        return target;
    }
  }
  
  const cloneMap = new WeakMap();
  function deepClone(target) {
    if (target === null || typeof target !== "object") {
      return target;
    }
  
    if (cloneMap.get(target)) {
      return cloneMap.get(target);
    }
  
    const targetType = type(target);
    switch (targetType) {
      case "function":
        return target;
  
      case "date":
        return new Date(target.getTime());
  
      case 'regexp':
          return new RegExp(target.source, target.flags)  
      case "array":
        const newArr = [];
        cloneMap.set(target, newArr);
        target.forEach((item) => {
          newArr.push(deepClone(item));
        });
        return Array;
  
      case 'map':
          const newMap = new Map();
          cloneMap.set(target,newMap);
          target.forEach((value, key)=>{
              newMap.set(deepClone(key), deepClone(value));
          })
          return newMap;
  
      case 'set':
          const newSet = new Set();
          cloneMap.set(target, newSet);
          target.forEach(value=>{
              newSet.add(deepClone(value));
          })
          return newSet;
  
      case 'object':
          const newObj = Object.create(Object.getPrototypeOf(target));
          cloneMap.set(target, newObj);
          Object.keys(target).forEach(key=>{
              newObj[key] = deepClone(target[key]);
          })
          Object.getOwnPropertySymbols(target).forEach(symbol=>{
              newObj[symbol] =deepClone(target[symbol]);
          })
          return newObj;
  
      default:
          return target;
    }
  }
  