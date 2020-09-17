(function(){
  function flat (arr) {
    if(!Array.isArray(arr)){
      throw new Error(`flat required an array, ${arr} is not an array`);
    }
    return arr.reduce((prev, cur) => {
      return prev.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, [])
  }
  flat([1, [2, [3]]]);
})()