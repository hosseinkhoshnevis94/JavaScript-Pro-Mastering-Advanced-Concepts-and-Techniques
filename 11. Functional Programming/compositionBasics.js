const add = (a, b) => a + b;
const square = (a) => a * a;

const addAndSquare = (a, b) => square(add(a, b));




function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWithDash(array) {
  return array.join("-");
}

joinWithDash(splitWords(lowerCaseString("My Favorite Function")));

function c (func1,func2){
  return function(value){
    return func1(func2(value))
  }
}

const lands = c(lowerCaseString,splitWords)
lands('hello')
