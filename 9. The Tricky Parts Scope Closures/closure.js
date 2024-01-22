function outer (){
    let count = 0
    return function inner(){
        return count++
    }
}

const x = outer()
// console.log(x());
// console.log(x());
// console.log(x());


//privacy with closure
const counter = () =>{
    let count = 0
    return{
        inc:function(){
            return count++
        },
        dec:function(){
            return count--
        },
        getCount:function(){
            return count
        },
    }
}
const c1 = counter()
c1.getCount()
c1.inc()
c1.inc()
c1.inc()
c1.getCount()

//closure and factory functions
const createExponentFunctions = (exponent) =>{
    return function(val){
        return val**exponent
    }
}
const square = createExponentFunctions(2)
const cube = createExponentFunctions(3)
console.log(square(8));
console.log(cube(5));

const uniqeIdGenerator = (prefix)=>{
let id = 0
return function(){
    id +=1
    return (prefix+id)
}
}
const uniqe = uniqeIdGenerator('book')
console.log(uniqe());

