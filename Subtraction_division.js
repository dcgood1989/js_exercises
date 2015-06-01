function subtract(string) {
  return string.split("-").reduce(function(previous, current) {
  return previous - Number(current);
  });
}
console.log(subtract("100-12-20"));

function divide(string) {
  return string.split("/").reduce(function(previous, current) {
    return previous / Number(current);
  });
}
console.log(divide("100/20"));
