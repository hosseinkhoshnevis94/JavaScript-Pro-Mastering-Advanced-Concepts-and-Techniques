function add(a, b, c) {
  return a + b + c;
}

function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

addCurry(3)(3)(1);
