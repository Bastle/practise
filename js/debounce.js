(function(){
  /**
   * 
   * @param {function} fun 
   * @param {number} delay 
   * @param {boolean} immediate 
   */
  function debounce(fun, delay = 3000, immediate = false){
    // 管理timer
    let timer = null;
    return function(){
      // 将函数 this 指向 debounce 返回的函数被调用时的 this
      let ctx = this;
      // 将参数传递给需要 debounce 的函数 
      // tips: 当 setTimeout 内的 callback 使用箭头函数时，可以不用额外赋值，因为箭头函数没有 arguments 会直接使用父函数的 arguments
      let args = arguments;
      
      if(timer){
        clearTimeout(timer);
      }
      if (immediate){
        // 当选择了立即执行的防抖模式时，判断是否存在定时器，不存在则执行且初始化定时器，在延迟时间结束时将定时器置空，重复调用时重复刷新定时器
        let callNow = !timer;
        timer = setTimeout(() => {
          timer = null;
        }, delay);
        if (callNow) {
          fun.apply(ctx, args);
        }
      } else {
        // 当选择了非立即执行的防抖模式时，在延迟时间结束时执行函数
        timer = setTimeout(() => {
          fun.apply(ctx, args);
        }, delay)
      }
    }
  }

  // 处理有返回值的函数防抖
  // 使用 promise 将处理后的数据返回
  function debounce2(fun, delay = 3000, immediate = false){
    // 管理timer
    let timer = null;
    return function(){
      // 将函数 this 指向 debounce 返回的函数被调用时的 this
      let ctx = this;
      // 将参数传递给需要 debounce 的函数
      let args = arguments;
      // 返回一个 promise 用来处理延迟结束时函数的返回值
      return new Promise(resolve => {
        if(timer){
          clearTimeout(timer);
        }
        if (immediate){
          // 当选择了立即执行的防抖模式时，判断是否存在定时器，不存在则执行且初始化定时器，在延迟时间结束时将定时器置空，重复调用时重复刷新定时器
          let callNow = !timer;
          timer = setTimeout(() => {
            timer = null;
          }, delay);
          if (callNow) {
            let result = fun.apply(ctx, args);
            resolve(result);
          }
        } else {
          // 当选择了非立即执行的防抖模式时，在延迟时间结束时执行函数
          timer = setTimeout(() => {
            let result = fun.apply(ctx, args);
            resolve(result);
          }, delay)
        }
      })
    }
  }
})()