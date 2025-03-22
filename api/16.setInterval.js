function myInterval(fn, delay){
 let timer = null;
  function callback(){

    fn();
   timer = setTimeout(callback, delay);
  }
  timer = setTimeout(callback, delay);


}
