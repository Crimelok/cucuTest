
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
var insideTheCup = "";
var quantity = "";
var value = "";
var thingInsideTheCup = "";
var ExAnsOne = "";
var ExAnsTwo = "";
var ActualQ = "";
var ActAns = "";
var run = 1;

function isItEmpty(content) {
    if (content == 'something') {
        insideTheCup = content
        thingInsideTheCup = "filled with something"
        return 'filled with something';
    } else if (content == 'water') {
        insideTheCup = content
        thingInsideTheCup = "filled with water"
        return 'filled with water';
    } else if (content == 'coffee') {
        insideTheCup = content
        thingInsideTheCup = "filled with coffee"
        return 'filled with coffee'
    }else if (content == 'milk'){
        insideTheCup = content
        thingInsideTheCup = "filled with milk"
        return 'filled with milk'
    }
}

function howMuchContains(quant) {
    if (quant == 'half') {
        quantity = quant
        value = "50%"
        return '50%'
    } else if (quant == 'full') {
        return '100%'
    } else if (quant == 'empty') {
        return '0%'
    }else if (quant == 'almost-full') {
        quantity = quant
        value = "85%"
        return '85%'
}}

Given('A cup with {string}', function (cup) {
    this.cup = cup
});

When('I Ask what contains', function () {
    this.actualAnswer = isItEmpty(this.cup)
});

When('The quantity is {string}', function (quantity) {
    this.actualQuantity = howMuchContains(quantity)
});

Then('The cup should contains {string} {string}', function (expectedAnswerOne, expectedAnswerTwo) {
    ExAnsOne = expectedAnswerOne;
    ExAnsTwo = expectedAnswerTwo;
    ActualQ = this.actualQuantity;
    ActAns = this.actualAnswer;

    //print results
    printResults();
    //Assert
    assert.equal(this.actualQuantity, expectedAnswerOne);
    //Assert
    assert.equal(this.actualAnswer, expectedAnswerTwo);
    run = run + 1;
});

function printResults(){
    console.log("- - - - - - - - - - - - - - - Run: [ "+ run + " ] - - - - - - - - - - - - - - - - -")
    console.log("Given A cup with [ " + insideTheCup + " ]")
    console.log("When I Ask what contains")
    console.log("And The quantity is [ " + quantity + " ]")
    console.log("Then The cup should contains [ " + value + " ] [ " + thingInsideTheCup + " ]")
    console.log("- o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o -")
    console.log("Expected Quantity = [ " + ExAnsOne + " ] | Actual = [ " + ActualQ +" ]")
    if(ActualQ == ExAnsOne){
        console.log("Expected = Actual");
    }else{
        console.log("Expected != Actual");
    }
    console.log("- o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o -")
    console.log("Expected liquid = [ " + ExAnsTwo+" ] | Actual = [ " + ActAns + " ]")
    if(ActAns == ExAnsTwo){
        console.log("Expected = Actual");
    }else{
        console.log("Expected != Actual");
    }
    console.log("- o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o - o -")
    console.log("Table of test cases: {")
    console.log("| insideTheCup | thingInsideTheCup       | quantity | value  |")
    console.log("| 'something'  | 'filled with something' | 'half'   | '50%'  |")
    console.log("| 'something'  | 'filled with something' | 'full'   | '100%' |")
    console.log("| 'something'  | 'filled with something' | 'empty'  | '0%'   |")
    console.log("| 'water'      | 'filled with water'     | 'full'   | '100%'' |")
    console.log("| 'coffee'     | 'filled with coffee'    | 'empty'  | '0%''   |")
    console.log("| 'milk'       | 'filled with milk'      | 'almost-full'   | '85%' |")
    console.log("}")
}