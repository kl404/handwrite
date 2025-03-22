function myCreate(proto){
   function fn(){};

   fn.prototype = proto;

   return new fn();
}