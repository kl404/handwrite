function throttle(fn,delay){

    let pre =0;
    return function(){
        const args = arguments;
        const context = this;
        const now = new Date();
        if(now - pre <delay){
            console.log('被拒绝')
            return;
        }
        fn.call(context,...args);
        pre = now;
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