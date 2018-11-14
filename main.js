/* class Auto {

    constructor(color, mat, kolesa) {
      this.color = color;
      this.mat = mat;
      this.kolesa  = 4;
    }
  
    start() {
      console.log('go go og')
    }
  
    stop() {
      console.log('остановиться')
    }
  }
  const taxi = new Auto('white', 'alum', 4);
const bus = new Auto('yellow', 'zhelezo', 4); */



/* class Rectangle {
  constructor( _w , _h) {
    this.width = _w;
    this.heigth = _h;
  }
  getPloshed(){
     return this.width * this.heigth;
  }
}
const r1 = new Rectangle(4,10);
 */
/* 
class Square {
  constructor(_w){
    this.width = _w;
    this.higth = _w;
    this.numberofReqForArea = 0;

  }
  get area(){
    this.numberofReqForArea++;
    return this.width*this.higth;
  }
}

const r2 = new Square(20);
console.log(r2.numberofReqForArea);
console.log(r2.area);
console.log(r2.area);
console.log(r2.area);
console.log(r2.area);

console.log(r2.numberofReqForArea); */


/* class Person {
  constructor(_name, _age){
    this.name = _name;
    this.age = _age;
  }

  info(){
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

const kuralbek = new Person('John', 24 );

class programmers extends Person{
  constructor(_name, _age, _stazh){
    super(_name,_age); // dobavlaet ot starogo classa
    this.Stazh = _stazh;
  }
  code(){
    console.log(`This  ${this.name} codding`);
  }
}
const oleg = new Person('oleg', 25); */


// HomeWork

class User {
  constructor(_name, _surename){
    this.name = _name;
    this.surename = _surename;
  }
  getfulname(){
     console.log(`my name is ${this.name} and my surename ${this.surename}`);
  }
}
const John = new User('john', 'snow');


class Student extends User{
  constructor(_name, _surename, _year){
    super(_name, _surename);
    this.year = _year;
  }
  getfulname(){
    console.log(`my name is ${this.name} and my surename ${this.surename} and I learn ${this.year} year this university`);

 }
 getCours(){
  const random = 1+Math.random()*(5-1);
  const intNumber = Math.round(random);
  return intNumber;
 }

}
const rob = new Student('Rob', 'Stark',);

// XML XHR

fetch('https://jsonplaceholder.typicode.com/todos/6')
.then( data => data.json())
.then(json => {
  const body = document.querySelector('body');

body.innerHTML = `
  <ul>
  <li><input type='checkbox' value='${json.completed}'>
  ${json.title}
  </li>
  
`;
console.log(json.completed);
})
.catch(Error => console.log(Error))










