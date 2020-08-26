

const ENUM = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
 }

class Promise {
  constructor(excutor){
    this.status = ENUM.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = value => {
      if(this.status === ENUM.PENDING){
        this.status = ENUM.FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(cb => cb());
      }
    }
    const reject = reason => {
      if(this.status === ENUM.PENDING){
        this.status = ENUM.REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(cb => cb());
      }
    }
    try {
      excutor(resolve, reject);
    } catch(e) {
      reject(e);
    }
  }
  then(onFilfilled, onRejected) {
    if(this.status === ENUM.FULFILLED){
      onFilfilled(this.value);
    }
    if(this.status === ENUM.REJECTED){
      onRejected(this.reason);
    }
    if(this.status === ENUM.PENDING){
      this.onResolvedCallbacks.push(() => {
        onFilfilled(this.value);
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
  static all(arrList) {
    if(!Array.isArray(arrList)){

    }
    return Promise((resolve, reject) => {
      const resultArr = [];
      const count = 0;
      const addResult = (value, index) => {
        resultArr[index] = value;
        if(++count === resultArr.length){
          resolve(resultArr);
        }
      }
      for(let i = 0; i < arrList.length; i++){
        const item = arrList[i];
        if(item && typeof item.then == 'function'){
          item.then(value => {
            addResult(value, i);
          }, reject);
        } else {
          addResult(item, i); 
        }
      }
    })
  }
  // 多个请求采取最快的 封装中断方法（异步请求设置超时时间）
  static race(arrList){

  }
}