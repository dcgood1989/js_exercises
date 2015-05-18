// In an array the integers 1-100 are stored, but one number is missing how do you find it?

// First I would create a function and name it oneToOneHundred that takes an array as the argument. Then I would figure out, if i were to add all of the numbers up in sequence from 1 - 100 what that value is. Then I do the same thing with the provided array with numbers 1-100 (5050). Once I have the solution to both answers I take the difference between the 2 answers given to find the missing number.

function sumOneToN(num) {
  return (num * (num + 1)) / 2;
var count = 0;
var oneToOneHundred = function(array) {
  for (i = 0; i < array.length; i++) {
    count = count + array[i];
  }
  if (count === 5050) {
    alert("All numbers are present");
  } else {
  alert(what - count + "is your missing number");
  }
};

//n(n + 1)/2 Gauss

// solution
function sumOneToN(num) {
  return (num * (num + 1)) / 2;
}
