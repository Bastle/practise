(function (){
  function _new(fn, ...rest){
    let obj = {};
    obj.__proto__ = fn.prototype;
    obj.fn = fn;
    let res = obj.fn(...rest);
    delete obj.fn;
    return res instanceof Object ? res : obj;
  }
  
  // 组合式继承
  function SuperType(name){
    this.name = name;
  }
  SuperType.prototype.say = function (){
    console.log(this.name);
  }

  function SubType (name, color){
    SuperType.call(this, name);
    this.color = color;
  }
  SubType.prototype = new SuperType('default');
  SubType.prototype.sayColor = function(){
    console.log(this.color);
  }
  // var instance1 = new SubType('instance1', 'red');
  var instance1 = _new(SubType, 'instance1', 'red');
  instance1.say();
  instance1.sayColor();

  // class SuperType1 {
  //   constructor(name){
  //     this.name = name;
  //   }
  //   static toSay(){
  //     console.log(this);
  //   }
  //   say(){
  //     console.log(this.name);
  //   }
  // }
  // class SubType1 extends SuperType1 {
  //   abc = 10;
  //   constructor(name, color){
  //     super(name);
  //     this.color = color;
  //     console.log('abc', this.abc)
  //   }
    
  //   sayColor(){
  //     console.log(this.color);
  //   }
  // }
  
  // let instance2 = new SubType1('这是 instance 2', 'yellow');
  // instance2.say();
  // // instance2.sayColor();
  // SubType1.sayColor();
  
})()