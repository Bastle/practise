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
})()