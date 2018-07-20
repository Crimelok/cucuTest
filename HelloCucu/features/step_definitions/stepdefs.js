const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function HelloWorld(example) {
  // We'll leave the implementation blank for now
  return 'Hello World'
}

Given('this example', function () {
  this.example = 'Hello World'
});

When('They told me about write this', function () {
  this.actualAnswer = HelloWorld(this.example)
});

Then('i should print {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer)
});