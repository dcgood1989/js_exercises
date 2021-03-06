function sumOf(array) {
  var result = 0;
  array.forEach(function(elem) {
    result += elem;
  });
  return result;
};

console.log(sumOf([1, 2, 3]))
//6

function productOf(array) {
  var result = 1;
  array.forEach(function(elem) {
    result *= elem;
  });
  return result;
};
console.log(productOf([1, 2, 3, 4]))
//24

function allAreEven(array) {
  var result = [];
  array.forEach(function(elem) {
    if ((elem % 2) === 0) {
      result.push(elem);
    }
  })
    return result
};
console.log(allAreEven([1, 2, 3, 4, 5, 6]))
//[2, 4, 6]


console.log(allAreEven([1, 2, 3]))
console.log(allAreEven(allAreEven([2, 4, 6])))

function allAreOdd(array) {
  var answer = true;
  array.forEach(function(elem) {
    if (elem % 2 === 0) {
      answer = false
    }
  })
  return answer
}
console.log(allAreOdd([1, 2, 3]));

function allAreOdd(array) {
  var answer = true;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      answer = false;
    }
  }
  return answer
}
console.log(allAreOdd([1, 2, 3]));
console.log(allAreOdd([1, 3, 5]));

function isEven(elem) {
  if (elem % 2 === 0) {
  return true;
} else {
  return false
  }
}

function allAre(array, conditionFn) {
  var result = true;
  array.forEach(function(elem) {
    if (conditionFn(elem) === false) {
      result = false;
    }
  })
  return result;
}
console.log(allAre([1, 2, 3], isEven))
console.log(allAre(["dog", "cat", "pig"], function(elem) { return elem.length < 4}))

console.log(allAre(["dog", "cat", "piglets"], function(elem) { return elem.length < 4}))


function anyAre(array, conditionFn) {
  var result = false;
  array.forEach(function(elem) {
    if (conditionFn(elem) === true) {
      result = true;
    }
  })
  return result;
}
console.log(anyAre(["dog", "cat", "piglets"], function(elem) { return elem.length < 4}))
console.log(anyAre(["doglets", "catlets", "piglets"], function(elem) { return elem.length < 4}))

function anyAre(array, conditionFn) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (conditionFn(array[i]) === true) {
      result = true;
    }
  }
  return result;
}
console.log(anyAre(["dog", "cat", "piglets"], function(elem) { return elem.length < 4}))
console.log(anyAre(["doglets", "catlets", "piglets"], function(elem) { return elem.length < 4}))


function zip(arrayOne, arrayTwo) {
  var result = [];
  for (var i = 0; i < arrayOne.length; i++) {
    result.push([arrayOne[i], arrayTwo[i]]);
  }
  return result;
}

console.log(zip(["a1", "a2", "a3"], ["b1", "b2", "b3"]))
//[["a1", "b1"], ["a2", "b2"],["a3", "b3"]]

function take(array, numberToTake) {
  if (numberToTake > array.length) {
    return array;
  } else {
    var result = [];
    for (var i = 0; i < numberToTake; i++) {
      result.push(array[i]);
    }
      return result;
  }
}
console.log(take([1, 2, 3, 4, 5, 0], 3))
console.log(take([1, 2, 3, 4, 5, 0], 30))

// Pick 1 method from a string and 1 from the enumerables and have them ready by the morning.
// function max(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < array[i + 1]) {
//   }
// }
//

// function minMax(array) {
//   var results = [];
//   array.forEach(function(elem) {
//     if (array(elem) > array(elem + 1))
//     results.push(elem)
//   })
// }
//
// console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(minMax(["dog", "cat", "horse", "pig"]))

function squeeze(string) {
  var results = [];
  var stringSplit = string.split(' ');
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      results.push(string[i])
    }
  }
    return results.join('')
}
console.log(squeeze("hello dood"))

function rejectFn(array, rejectFn) {
  var results = [];
    for (var i = 0; i < array.length; i++)
      if (rejectFn(array[i]) === true) {
        results.push(array[i]);
      }
      return results;
    }
console.log(rejectFn([1, 2, 3, 4], function(n) {return n < 2}));

function partition(array, conditionFn) {
  var results = [];
  var falseResults = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      results.push(array[i])
    } else {
      results.push(array[i]);
    }
    return results + "," + "[" + falseResults + "]"
  }
}
console.log(partition([1, 2, 3, 4, 5, 6], function(i) { return i % 2 }))
