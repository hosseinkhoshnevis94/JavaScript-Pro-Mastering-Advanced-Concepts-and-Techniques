const nums = [1, 2, 3, 4];
const obj = {name:'hossein',age:25}
Object.freeze(obj)
function push(arr, val) {
  return [...arr, val];
}



function removeLastItem(arr) {
  return arr.slice(0, -1);
}
