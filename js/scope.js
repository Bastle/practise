(function(){
  function a (){
    let b;
    let c = () => {
      // 获取的变量 b 的值，因为只有一个变量 b 且在调用前改变了b的值，所以打印 b 的值为1，其原理与 for 循环中 i 的值总是相同的原因一致
      console.log('---- b ---->', b);
    }
    return function(){
      b = 1;
      c();
    }
  }
  a()();
  function b (...args){
    console.log('args', args);
  }
  b(1,2,3);
  b.apply(this, [1,2,3]);
  let obj = {
    x: 1,
    currying: function(fn){
      let args = Array.prototype.slice.call(arguments, 1);
      function next(){
        args = args.concat(Array.prototype.slice.call(arguments));
        return next;
      }
      next.toString = function(){
        return fn.apply(null, args);
      }
      next.valueOf = function(){
        return fn.apply(null, args);
      }
      return next;
    }
  }
  function currying (fn){
    let args = Array.prototype.slice.call(arguments, 1);
    function next(){
      args = args.concat(Array.prototype.slice.call(arguments));
      return next;
    }
    next.toString = function(){
      return fn.apply(null, args);
    }
    next.valueOf = function(){
      return fn.apply(null, args);
    }
    return next;
  }
  function cba(){
    console.log('x', this.x);
  }
  let abc = obj.currying(cba);
  abc();
  // console.log('currying', abc(1)(2)(3)());
})()