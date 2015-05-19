var sumArray = function(array) {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result;
 }
console.log(sumArray(1,2,3,4,5,6,7,8,9,10)); //55


var productArray = function(array) {
  var result = 1;
  for (var i = 0; i < arguments.length; i++) {
    result *= arguments[i]
  }
  return result
}
console.log(productArray(2,3,4,5,6)); //720
