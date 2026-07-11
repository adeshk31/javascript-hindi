//AN OBJECT IS A COLLECTION OF KEY-VALUE PAIRS USED TO STORE RELATED DATA AND FUNCTIONALITY
//TWO TYPES OF OBJECT DECLARATION
//SINGLETON AND LITERALS
//BELOW IS THE LITERALS ONE

const person={
    name: "Adesh",
    rollno:62,
    sub:["cn","dbms","oops"]
}
//console.log(typeof person.sub)
    let a= Object.keys(person)
//console.log(typeof a)

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,

  start() {
    console.log(this.brand + " is starting...");
  }
};

//console.log(car.brand);      // Toyota
//car.start();                 // Toyota is starting...

car.color = "White";
//console.log(car.color);      // White

delete car.year;
//console.log(Object.keys(car));
//console.log(Object.values(car));
//console.log(Object.entries(car));

console.log(car.brand,car.model);