function compose(...functions) {
  return function (data) {
    return functions.reduceRight((val, func) => func(val), data);
  };
}

function lowerCaseString(str) {
  console.log('3');
  
  return str.toLowerCase();
}

function splitWords(str) {
  console.log('2');
  return str.split(" ");
}

function replaceS(str) {
  return str.replaceAll("s", "$");
}

function joinWithDash(array) {
  console.log('1');
  return array.join("-");
}

const sluggify = compose(joinWithDash, splitWords, lowerCaseString);
const r = sluggify('I lovE eating')
console.log(r);
const lowerAndReplaceS = compose(replaceS, lowerCaseString);
