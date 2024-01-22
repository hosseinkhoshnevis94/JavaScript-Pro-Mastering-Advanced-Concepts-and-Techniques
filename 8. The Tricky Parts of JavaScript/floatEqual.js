function areFloatsEqual(a,b,epsilon= 1e-10){
    return Math.abs(a-b) < epsilon
}

const x = areFloatsEqual(0.3,0.2+0.1)
console.log(x);
