// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(newName) {
//     const [first, last] = newName.split(" ");
//     this.firstName = first;
//     this.lastName = last;
//   }
// }

class User{
  constructor(name,family){

    this.name = name
    this.family = family
  }
  get fullName (){
    return this.name + " " + this.family
  }
  set fullName(fullName){
    const [name , family] = fullName.trim().split(' ')
    this.name = name
    this.family = family
  }

}

const p1 = new User('hossein','khosh')


p1.fullName = ' h kh'
console.log(p1.fullName);