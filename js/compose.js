(function(){
  // 剥洋葱
  // 将嵌套的函数打散
  // a(b(c(arguments)))
  // compose(a, b, c)(arguments)

  function compose2(...funcs){
    if(funcs.length === 0){
      return (arg) => arg;
    }
    if(funcs.length === 1){
      return funcs[0];
    }
    return (args) => {
      funcs.reduceRight((a, b) => {
        return b(a);
      }, args);
    }
  }
  
  // react-redux 内部 compose 实现
  function compose(...funcs){
    if(funcs.length === 0){
      return arg => arg;
    }
    if(funcs.length === 1){
      return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
  }
  
  // let funcs = [];
  // 1 (...args) => funs[0](funs[1](...args));
  // 2 (...args) => funs[0](funs[1](funs[2](...args)));
  function fun1(x) {
    console.log('func1');
    return x => {
      console.log('sub func1')
      return x*10
    };
  }
  function fun2(x) {
    console.log('func2')
    return x => {
      console.log('sub func1')
      return x/3;
    }
  }
  function fun3(x) {
    console.log('func3');
    return x => {
      console.log('sub func3');
      return x*2;
    };
  }
  // fun1(fun2(fun3(6)));
  let result = compose(fun1, fun2, fun3);
  result(1);
})()