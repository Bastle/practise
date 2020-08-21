
(function(){
  window.addEventListener('resize',
    throttle((e) => {
      console.log(e);
    }, 1000)
  )
  function throttle (fn, delay){
    let last = 0;
    return function(){
      let ctx = this;
      let args = arguments;
      let now = Date.now();
      if(now >= last + delay){
        fn.apply(ctx, args);
        last = now;
      }
    }
  }
})()