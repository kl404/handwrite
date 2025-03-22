function myNew(fn, ...args){
    const obj = Object.create(fn.prototype);

    const res = fn.call(obj, ...args);

    return typeof res === 'object' ? res : obj;
}