function type(a) {
  return Object.prototype.toString
    .call(a)
    .split(" ")[1]
    .replace("]", "")
    .toLowerCase();
}

const map = new Map();
function deepClone(obj) {
  if (typeof obj != "object") {
    return obj;
  }

  if (map.get(obj)) {
    return map.get(obj);
  }
  const type = type(obj);

  switch (type) {
    case "function":
      return obj;

    case "date":
      return new Datea(obj);

    case "array":
      const newArray = [];
      map.set(obj, newArray);
      for (let i = 0; i < obj.length; i++) {
        newArray.push(deepClone(obj[i]));
      }
      return newArray;

    case "map":
      const newMap = new Map();
      map.set(obj, newMap);
      obj.forEach((key, value) => {
        newMap.set(deepClone(key), deepClone(value));
      });
      return newMap;

    case "set":
      const newSet = new Set();
      map.set(obj, newSet);
      obj.forEach((item) => {
        map.add(deepClone(item));
      });
      return newSet;

    case "object":
      const newObj = Object.create(Object.getPrototypeOf(obj));
      map.set(obj, newObj);
      const objKeys = Object.keys(obj);
      objKeys.forEach((key) => {
        newObj[key] = deepClone(obj[key]);
      });
      return newObj;
  }
}
