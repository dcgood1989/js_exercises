function Set(array) {
 this.array = array;
}

  Set.prototype.asSet = function() {
   var array = this.array;
   var newArray = [];
   for (var i = 0; i < array.length; i++) {
     if (newArray.indexOf(array[i]) === -1) { newArray.push(array[i]) };
   }
   return newArray;
  }

  Set.prototype.toString = function() {
   return "{ '" + this.asSet().join("','") + "' }";
  }

var set = new Set([11,2,3,4,2,2,4,3]);
console.log(set.asSet()); // [11,2,3,4]
console.log(set.toString()); // {11, 2, 3, 4}

var wordSet = new Set(['foo', 'foo', 'bar', 'bar', 'baz', 'ski', 'bar', undefined, undefined]);
console.log(wordSet.asSet()); // ['foo','bar', 'baz', 'ski', undefined]
console.log(wordSet.toString()); // {'foo','bar', 'baz', 'ski', }
