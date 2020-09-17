
(function(){
  /**
   * 对数组进行循环，逐个进行处理，将处理后的结果及下一项传入 callback 函数，返回最后的结果
   * @param {function} callback 
   * @param {?*} initialValue 
   * @returns {*}
   */
  Array.prototype.fakeReduce = function (callback, initialValue) {
    if(typeof callback !== 'function') {
      throw new Error(`${callback} is not a function`)
    }
    if(!this.length && typeof initialValue === 'undefined'){
      throw new Error('reduce of empty array && no initial value');
    }
    let result = typeof initialValue === 'undefined' ? this[0] : initialValue;
    let startIndex = typeof initialValue === 'undefined' ? 1 : 0;
    for(let i = startIndex, len = this.length; i < len; i++){
      result = callback(result, this[i], i, this);
    }
    return result;
  }
  console.log([1].fakeReduce(() => {}, 1));
})()
