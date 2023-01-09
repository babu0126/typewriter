const nameInverter = require('../nameInverter');
const chai = require('chai');
const assert = chai.assert;

describe('nameInverter', function() {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a single name when passed a single name with extra spaces', function() {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a last-name, first-name when passed a first and last-name', function() {
    const inputName = "david wang";
    const expectedOutput = "wang, david";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', function() {
    const inputName = "david wang";
    const expectedOutput = "wang, david";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return an empty string when passed a single honorific', function() {
    const inputName = "Dr.";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return honorific first-name when passed honorific first-name', function() {
    const inputName = "Dr. Wang";
    const expectedOutput = "Dr. Wang";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a honorific last-name, first-name when passed honorific first-name last-name', function() {
    const inputName = "dr. david wang";
    const expectedOutput = "dr. wang, david";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
    const inputName = " dr. david wang ";
    const expectedOutput = "dr. wang, david";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should throw an error when name is undefined', function() {
    assert.throws(nameInverter, 'error');
  });

});

