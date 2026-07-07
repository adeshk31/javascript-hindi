const num=123.756
const str= num.toString() //convert a number to str

console.log(num)         //
console.log(typeof num)
console.log(typeof str)
console.log(str.length)  //this is a length method of string not of number thats why we converted the num to str.
console.log(num.toFixed(0)) //decimal value of num not str
console.log(num.toPrecision(4)) //cares about statring from left side of a number that is SIGNIFICANT DIGITS

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//basically a mod
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); //returns next val ie 5
// console.log(Math.floor(4.9)); //retuns same val ie 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //gives value between 0&1
console.log((Math.random()*10) + 1);//can give value 0
console.log(Math.floor(Math.random()*10) + 1);//to avoid geeting zero we add 1

//if we have a limit like we need values between then
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//mug up the formula
// Math.floor(Math.random() * (max-min+1)) + min