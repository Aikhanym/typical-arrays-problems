
exports.min = function min (array) {
    return Math.min.apply(null, array);
/*   if (array === undefined  || array !== Number){
    return 0;
  }  */
};

exports.max = function max (array) {
 /*  if (array === undefined || array !== Number){
    return 0;
  }  */
    return Math.max.apply(null, array);
};

exports.avg = function avg (array) {
  /* if (array === undefined || array !== Number){
    return 0;
  }  */
    var total = 0;
    var count = 0;
  array.forEach(function(item){
    total += item;
    count ++;
  });
  return total/count;
};