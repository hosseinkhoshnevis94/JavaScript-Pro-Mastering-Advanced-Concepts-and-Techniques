const ringo = {
  firstName: "Ringo",
  greet: function (greeting, punctuation) {
    console.log(`${this.firstName} says ${greeting}${punctuation}`);
  },
};

const george = {
  firstName: "George",
  lastName: "Harrison",
};


const func = ringo.greet.bind(george)


const nums = [1, 5, 2, 99, 3, 5,2000];

function maximum() {
  console.log(arguments);
  return Math.max.apply(null, arguments);
}


