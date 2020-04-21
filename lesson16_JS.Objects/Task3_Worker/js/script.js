function Worker(name,surname,rate,days){
  this.name=name;
  this.surname=surname;
  this.rate=rate;
  this.days=days;
  this.getSalary = function () {
    return this.days*this.rate;
  }
}
let worker=new Worker('Іван','Іванов',10,31);
console.log(`Name: ${worker.name},`);
console.log(`Surname: ${worker.surname},`);
console.log(`Rate: ${worker.rate},`);
console.log(`Days: ${worker.days},`);
console.log(`Salaty: ${worker.getSalary()}.`);