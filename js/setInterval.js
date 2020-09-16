(function(){
  // 用 setTimeout 实现 setInterval
  // 最后返回一个函数，用于清除倒计时
  /**
   * 
   * @param {function} fn 
   * @param {number} timeout 
   */
  function mySetInterval(callback, timeout) {
    // 参数判断 （编码基本功）
    if(!arguments.length){
      throw new Error('1 argument required, but only 0')
    }
    if(typeof callback !== 'function'){
      throw new Error(`${callback} is not a function`)
    }
    if(Number(timeout) !== Number(timeout)){
      throw new Error(`${timeout} is not a number`)
    }

    let timer = null;
    function myInterval(){
      timer = setTimeout(myInterval, timeout);
      callback();
    }
    setTimeout(myInterval, timeout);

    // 结束倒计时以及防止内存泄漏
    return function(){
      clearTimeout(timer);
      timer = null;
    }
  }

  let clear = mySetInterval(() => console.log(1), 200);

  setTimeout(clear, 2000)
})()
