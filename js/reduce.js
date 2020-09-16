
(function(){
  Array.prototype.reduc = function (callback, initialValue) {
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
  console.log([].reduc((total, cur) => total + cur))
})()
