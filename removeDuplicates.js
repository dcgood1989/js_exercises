// Write an algorithm that removes all duplicate elements from the array.
// I would do this first by creating a function called removeDuplicates that takes an array as an argument. Then I would create an empty array and name it array. After that I would run a for loop that goes through the array iterating 1 at a time. For each element in the array that does not already exist, I want to push it into the empty array with the .push method. I will test if the value is already there by having a count for each element and if it is greater than 1 do not push into the array

var noDuplicates = [];
var removeDuplicates = function(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] !== -1);
    noDuplicates.push(array[i]);
  }
  return noDuplicates
}


function removeDuplicates(array) {
    return array.reduce(links, function(result, elem) {
        if (result.indexOf(elem) === -1) {
            result.push(elem);
        }
        return result;
    }, []);
}
