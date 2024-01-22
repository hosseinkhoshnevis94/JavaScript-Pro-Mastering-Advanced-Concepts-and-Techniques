//js is static or lexical scoping
let animal = 'cat'
function printAnimal(){
    console.log(animal);
}

function alsoPrintAnimal(){
    let animal = 'dog'
    printAnimal()
}
printAnimal()   //cat
alsoPrintAnimal() //cat