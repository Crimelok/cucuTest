const assert = require('assert');
const { Given, When, Then } = require('cucumber');
function isItEmpty(contains) {
  // We'll leave the implementation blank for now
  return 'not empty'
}

Given('A cup', function () {
  this.cup = 'empty'
});

var contentenido;
When('It contains {string}', function (content) {
if(content == 'something'){
this.actualAnswer = 'not empty'
}else{
    this.actualAnswer = 'empty'
}
return contentido = content;
});


Then('The cup should be {string}', function (expectedAnswer) {
if(this.actualAnswer == expectedAnswer){
    console.log("The cup contains [" + contentido + "]")
}else{console.log("The cup is empty")}
assert.equal(this.actualAnswer, expectedAnswer);
});