(function(){
  function shallowCopy(target){
    if(target === null) return null;
    if(typeof target !== 'object') return target;
    let result = Array.isArray(target) ? [] : {};
    for(let key in target){
      if(target.hasOwnProperty(key)){
        result[key] = target[key]
      }
    }
    return result;
  }
  // 使用 JSON 格式的转换进行深拷贝
  function deepCopy(target){
    return JSON.parse(JSON.stringify(target));
  } 
  // 使用递归进行深拷贝 同时考虑到日期和正则表达式对象
  function deepCopy(target){
    if(target === null) return null;
    if(target instanceof Date) return new Date(target);
    if(target instanceof RegExp) return new RegExp(target);
    if(typeof target !== 'object') return target;
    let cloneTarget = new target.constructor();
    for(let key in target){
      if(target.hasOwnProperty(key)){
        if(typeof target[key] === 'object'){
          cloneTarget[key] = deepCopy(target[key]);
        } else {
          cloneTarget[key] = target[key];
        }
      }
    }
    return cloneTarget;
  }

  let obj = {a: 1, b: [2,3]};
  let shallowObj = shallowCopy(obj);
  let deepObj = deepCopy(obj);
  console.log('shallowObj', shallowObj);
  console.log('deepObj', deepObj);
  obj.b[0] = 100;
  console.log('shallowObj', shallowObj);
  console.log('deepObj', deepObj);
})()