const num=123.756
const str= num.toString() //convert a number to str

console.log(num)         //
console.log(typeof num)
console.log(typeof str)
console.log(str.length)  //this is a length method of string not of number thats why we converted the num to str.
console.log(num.toFixed(0)) //decimal value of num not str
console.log(num.toPrecision(4)) //cares about statring from left side of a number that is SIGNIFICANT DIGITS
