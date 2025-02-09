Function.prototype.call=function(context,...args){
    if(typeof this !== 'function'){
        throw new Error('not a function');
    }
    context = context || window;
    const fn = new Symbol('fn');
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
}

Function.prototype.apply =function(context,args){
    if(typeof this !== 'function'){
        throw new Error('not a function');
    }
    context = context || window;
    const fn = new Symbol('fn');
    context[fn] = this;
    const result = context[fn](...Array.from(args));
    delete context[fn];
    return result;
}


Function.prototype.bind = function(context,...args){
    if(typeof this !== 'function'){
        throw new Error('not a function');
    }
    const self = this;

    return function(...newArgs){
        return self.call(context,...args,...newArgs);
    }

}