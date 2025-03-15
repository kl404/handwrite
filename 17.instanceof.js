function myInstanceof(obj, constructor){
    let cur = Object.getPrototypeOf(obj);

    while(cur){
        if(cur === constructor.prototype){
            return true;
        }
        cur = Object.getPrototypeOf(cur);
    }

    return false;

}

const obj = Object.create(Array.prototype);
console.log(myInstanceof(obj, Array));

