// 函数柯里化

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

function interval(callback, time){
  function myInterval(){
    setTimeout(myInterval, time);
    callback();
  }
  setTimeout(myInterval, time);
}

Function.prototype.bind = Function.prototype.bind || function(ctx, ...args1){
  let that = this;
  return function (...args2){
    that.call(ctx, ...args1, ...args2);
  }
}