const map = new WeakMap();
function deepClone(a) {
  if (typeof a !== "object") {
    return a;
  }

  if (map.has(a)) {
    return map.get(a);
  }
  const clonedA = Array.isArray(a) ? [] : {};
  map.set(a, clonedA);

  for (let k in a) {
    clonedA[k] = deepClone(a[k]);
  }

  return clonedA;
}

