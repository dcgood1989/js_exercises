// var stringConcatenator = function(string1, string2) {
//   var x = string1.concat(string2) ;
//   return x;
// }
// console.log(stringConcatenator("Hey man ", "how are you?"))
//
// var stringConcatenator = function(string1, string2) {
//   return (string1 + " " + string2);
// }
// console.log(stringConcatenator("Hey man", "how are you?"))
//
// // SUM OF NUMBERS IN ARRAY
//
// function addNumbers(array) {
//   var result = 0;
//   array.forEach(function(i) {
//     result += i;
//   });
//   return result;
// };
// console.log(addNumbers([1, 2, 3, 4, 5]));
//
// function addNumbers(array) {
//   return array.reduce(function(first, second) {
//     return first + second;
//   })
// }
// console.log(addNumbers([1, 2, 3, 4, 5]));
//
// // MULTIPLY NUMBERS IN ARRAY
//
// function multiplyNumbers(array) {
//   var result = 1;
//   array.forEach(function(i) {
//     result *= i;
//   });
//   return result
// }
// console.log(multiplyNumbers([1, 2, 3, 4, 5]));
// 120
//
// function multiplyNumbers(array) {
//   return array.reduce(function(first, second) {
//     return (first * second);
//   })
// }
// console.log(multiplyNumbers([1, 2, 3, 4, 5]));
// 120
//
//
// function selectElement(array, conditionFn) {
//   var results = [];
//   for (var i = 0; i < array.length; i++) {
//     if (conditionFn(array[i]) === true) {
//       results.push(array[i]);
//     }
//   }
//   return results;
// }
//
// function selectElement(array, conditionFn) {
//   result = [];
//   array.forEach(function(elem) {
//     if (conditionFn(elem) === true) {
//       result.push(elem);
//     }
//   });
//   return result;
// }
// console.log(selectElement(["dog", "cat", "goat"], function(i){ return i.length === 3}))
// // ["dog", "cat"]
//
//
// function rejectElement(array, conditionFn) {
//   var results = [];
//     for (var i = 0; i < array.length; i++)
//       if (conditionFn(array[i]) === false) {
//         results.push(array[i]);
//       }
//       return results;
//     }
// function rejectElement(array, conditionFn) {
//   var results = [];
//   array.forEach(function(elem) {
//     if (conditionFn(elem) === false) {
//       results.push(elem);
//     }
//   });
//   return results;
// }
// console.log(rejectElement(["camel", "dog", "cat", "goat"], function(i) { return i.length < 4}))

function anyElement(array, conditionFn) {
  var results = [];
  array.forEach(function(elem) {
    if (conditionFn(elem) === true) {
    }
  });
      return true
}
console.log(anyElement(["camel", "dog", "cat"], function(i) { return i.length === 5}))
// true (returns true if any element in the array returns true)
