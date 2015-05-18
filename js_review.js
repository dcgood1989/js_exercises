function Guitar(brand, color, numStrings) {
  this.brand = brand;
  this.color = color;
  this.numStrings = numStrings;
  var that = this;

  return {
    toString: function () {
      return ['A', that.color, that.brand, "with", that.numStrings, "strings"].join(' ');
    },
    getBrand: function () {
      return that.brand;
    },
    setBrand: function () {
      that.brand = newBrand;
    }
  };
}

var g = new Guitar("Fender", "sunburst red", 6);

// This kind of set up makes it so that people cannot go in and change your properties of your items by using closure.
// Returning 
