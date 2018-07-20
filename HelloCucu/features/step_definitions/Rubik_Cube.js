const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItSolved(Cube) {
  // We'll leave the implementation blank for now
  return 'solved'
}

Given('A rubiks cube', function () {
  this.Cube = 'Mixed'
});

When('it has been mixed up', function () {
  this.actualAnswer = isItSolved(this.Cube)
});

Then('determine if the rubiks cube is {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer)
});