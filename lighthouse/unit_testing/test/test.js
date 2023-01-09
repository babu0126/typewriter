const chai = require('chai');  // import the chai library
const assert = chai.expect;  // establish a variable to be used in our tests
const validator = require('../javascript/groupValidator.js'); // import the file where our function lives
describe("The function groupValidator()", () => {
    // this is where we put our tests.
});

it("should return false when there are fewer than 2 group members", () => {
  assert(validator.isGroupValid(["a"])).to.be.false
});
it("should return false when there are more than 5 group members", () => {
  assert(validator.isGroupValid(["a", "b", "c", "d", "e", "f"])).to.be.false
});