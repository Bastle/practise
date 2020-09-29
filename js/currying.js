// 函数柯里化
(function (){
  var monthlyCost = 0;
  var cost = function (money){
    monthlyCost += money;
  }

  cost(100);
  cost(200);
  cost(300);

  console.log(monthlyCost);

  const cost = (function(){
    let args = [];
    return function (){
      if(arguments.length === 0){
        let money = 0;
        for(let i = 0; i < args.length; i++){
          money += args[i];
        }
        return money
      } else {
        [].push.apply(args, arguments);
      }
    }
  })();
  
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



  function currying1(fun){
    let args = [];
    function _fun(){
      if(arguments.length === 0){
        return fun(...args)
      } else {
        args.push(Array.prototype.slice.apply(arguments)[0]);
        return _fun;
      }
    }
    return _fun;
  }
  function add(x,y,z){
    return x + y + z;
  }
  let add1 = currying1(add);
  add1(1)(2)(3)();
})()

