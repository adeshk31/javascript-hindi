//ANOTHER WAY TO DECLARE OBJECTS:
//OBJECT AS A CONSTRUCTOR
const person =new Object()
 person.name="adesh"
 person.rollno=62
//console.log( person)
//ANOTHER WAY

const game={}
game.size=746
game.name="Freefire"

//console.log(game)

//OBJECT DESTRUCTURING:-
//OBJECT DESTRUCTURING IS A WAY TO TAKE VALUES OUT OF AN OBJECT AND STORE THEM IN VARIABLES.
//Object destructuring makes code shorter, cleaner, and easier to read by allowing us to extract object properties into variables in a single line.

const student = {
  name: "Adesh",
  age: 21,
  college: "VPKBIET"
};

const { name, age, college } = student;

console.log(name);     // Adesh
console.log(age);      // 21
console.log(college);  // VPKBIET



