(function(){
  Promise.prototype.retry = function (pro, n){
    let flag = 0;
    return new Promise((resolve, reject) => {
      function myTry(){
        pro().then(resolve).catch(err => {
          flag++;
          console.log(flag);
          if(flag > n){
            reject(err);
          } else {
            myTry();
          }
        })
      }
      myTry();
    })
  }
  let p1 = function(){
    return new Promise((resolve, reject) => {
      let r = Math.random(1);
      console.log('r----->', r);
      if(r > 0.9){
        resolve(r);
      } else {
        reject(r);
      }
    });
  }
  Promise.prototype.retry(p1, 3).then(console.log).catch(console.error);
})()