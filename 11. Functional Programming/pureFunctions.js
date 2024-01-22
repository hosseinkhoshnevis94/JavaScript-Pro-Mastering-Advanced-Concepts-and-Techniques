// same value + no side effect + dont depend on any mutable value

// IMPURE : because it has sude effect
let value = 2;
function squareAndUpdateValue(num) {
  value = num * num;
  return value;
}

// PURE
function square(num) {
  return num * num;
}

// IMPURE : because it depends on mutable state(colors)
const colors = ["red", "orange"];
function addToArray(arr, value) {
  return arr.push(value);
}

// PURE
function pureAddToArray(arr, value) {
  return [...arr, value];
}
