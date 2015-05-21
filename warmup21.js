function reverseWords(string) {
  var reversed = string.split(' ').reverse().join(' ');
return reversed
}


console.log(reverseWords("This s3nt3nce. is awesome.ly awesome# %forRealz"));
//%forRealz awesome# awesome.ly is s3nt3nce. This


function addition(string) {
  var array = string.split('+');
  var result = 0;
  for (var i =0; i < array.length; i++) {
    result += Number(array[i]);
  }
  return result;
}
console.log(addition("1+2+10+12+20+22"));
//67


function multiplication(string) {
  var array = string.split('*');
  var result = 1;
  for (var i = 0; i < array.length; i++) {
    result *= Number(array[i]);
  }
  return result
};
console.log(multiplication("1*2*10*12*20*22"));
//105600
//type coersion

function mixedOps(string) {
  var array = string.split('+');
  result = 0;
  for (var i = 0; i < array.length; i++) {
    result += multiplication(array[i]);
  }
  return result;
};

function mixedOps(string) {
  return addition(string.split('+').map(multiplication).join('+'));
}

console.log(mixedOps("1*2*10+12*20*22"));
//5300
