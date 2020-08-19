(function(){
  let c = {
    a: 123456,
    b: function(){
      console.log(this.a);
    }
  }
  window.addEventListener('scroll', jieliu(c.b, 300))
  
  let timer = null;
  timer = setTimeout(() => {console.log(222)}, 2000);
  clearTimeout(timer);

  function jieliu(fun, delay){
    let timer = null;
    
    return function(){
      let ctx = this;
      let args = arguments;
      if(timer){
        clearTimeout(timer);
        timer = null;
      }
      
      timer = setTimeout(() => {
        fun.apply(ctx, args);
      }, delay)
    }
  }

  function a(){
    return function(){
      console.log(arguments);
    }
  }
  a()(3);
})()