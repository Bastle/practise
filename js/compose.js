(function(){
  // 剥洋葱
  // 将嵌套的函数打散
  function compose(){
    let args = Array.prototype.slice.call(arguments);
    return function(arg){
      let result = args.reduceRight((prev, cur) => {
        return cur(prev);
      }, arg)
      return result;
    }
  }
  function fun1(x) {
    return x * 10;
  }
  function fun2(x) {
    return x / 3;
  }
  function fun3(x) {
    return x * 2;
  }
  console.log(fun1(fun2(fun3(6))))
  console.log(compose(fun1, fun2, fun3)(6));
})()