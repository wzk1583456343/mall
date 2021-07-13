//时间戳转标准时间你
export function format (date, fmt) {
  var date = new Date(date);
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
  };
  for (var k in o) {
      if (new RegExp('('+k+')').test(fmt)) {
          var str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
      }
  }
  return fmt;
}
//防抖函数
export function debounce(func, time=200){
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, time)
  }
}
