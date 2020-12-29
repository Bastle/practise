

(function(){
  // 手写 bind 方法 重点在于
  // 1、将函数绑定 传入的 目标值  使用 call 或 apply 方法
  // 2、将 bind 方法中除目标值（第一项）以外的参数作为默认参数传入函数中
  // section 1
  Function.prototype.bind = Function.prototype.bind || function(ctx){
    let fn = this;
    let arg = Array.prototype.slice.call(arguments, 1);
    return function(){
      arg.concat(Array.prototype.slice.call(arguments));
      fn.apply(ctx, arg);
    }
  }

  // section 2 
  // es6 数组解构
  Function.prototype.bind = Function.prototype.bind || function(ctx, ...arg1){
    let fn = this;
    return function(...arg2){
      fn.call(ctx, ...arg1, ...arg2);
    }
  }


})()
