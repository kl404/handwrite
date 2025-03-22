function debounce(fn,delay){
    let timer = null;
    return function(e){
        console.log(e)
        clearTimeout(timer);
        let context = this;
        let args = arguments;
        timer = setTimeout(()=>{
            fn.call(context,...args)
        },delay)
    }
}
function throttle(fn, delay) {
    let timer =null;
    return function () {
        if(timer){
            console.log('被拒绝')
            return;
        }
        timer = setTimeout(()=>{
            fn();
            timer = null;
        },delay)
    };
  }




