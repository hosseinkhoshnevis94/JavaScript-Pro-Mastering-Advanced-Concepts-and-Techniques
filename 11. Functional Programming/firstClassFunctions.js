//wich means they can treated like any other value for instanse we can pass them as
// a argument and also put them in a variable or return them!

function greet(person) {
  console.log(`Hello there, ${person}`);
}

function hate(person) {
  console.log(`I hate you, ${person}`);
}
const  logging = (value)=> console.log(value);

function callWithBlue(func) {
  func("Blue");
}

callWithBlue((color) => {
  logging(`${color} is the best color`);
});
