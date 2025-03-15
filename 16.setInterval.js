function myInterval(callback, delay = 1000){
  let timerId;
    function fn(){
        callback();
        timerId = setTimeout(fn, delay);
        console.log(timerId)
    }
    timerId = setTimeout(fn, delay)
}


function test(){
    console.log('test')
}
myInterval(test)