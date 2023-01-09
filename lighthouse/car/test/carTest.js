const chai = require('chai'); // 1
const assert = chai.assert;
const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return true if it's a pink", function() {
    const car = {
      color: "pink"
    };
    assert.isTrue(shouldBuyCar(car));
  });
  it("should return false when there are no details about the car", function() {
    const car = {};
    assert.isFalse(shouldBuyCar(car));
  });
  it("should return false when the car is a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    assert.isFalse(shouldBuyCar(car));
  });
  it("should return false when the car is a hatchback and pink", function() {
    const car = {
      type: "hatchback",
      color: 'pink'
    };
    assert.isFalse(shouldBuyCar(car));
  });
  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 5000
    };
    assert.isTrue(shouldBuyCar(car));
  });
  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 5000
    };
    assert.isTrue(shouldBuyCar(car));
  });
  it("should return false when the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 5001
    };
    assert.isFalse(shouldBuyCar(car));
  });
  it("should return false when the car has 11 litres/100km and is over $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 5001
    };
    assert.isFalse(shouldBuyCar(car));
  });
  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 5,
      price: 0
    };
    assert.isFalse(shouldBuyCar(car));
  });
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 12,
      price: 0
    };
    assert.isFalse(shouldBuyCar(car));
  });
  it("should return undefined when there is no car", function() {
    const car = undefined;
    assert.isUndefined(shouldBuyCar(car));
  });
});

