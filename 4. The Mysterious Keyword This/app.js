class F{
    constructor(name){
        this.name = name
    }
    sayHi(greeting){
        console.log(this.name + greeting);
    }
}
const name = 'ali'
const p = new F('hossein')
const p1 = new F('ho')
const s = p.sayHi.bind(p1,'HELLO')
s()
