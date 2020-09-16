function mySetInterval(fn, timeout) {
  let timer = null;
  function myInterval(){
    timer = setTimeout(myInterval, timeout);
    fn();
  }
  setTimeout(myInterval, timeout);
  return function(){
    clearTimeout(timer);
    timer = null;
  }
}

let clear = mySetInterval(() => console.log(1), 200);

setTimeout(clear, 2000)