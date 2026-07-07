//date is object
//months start from 0 in js
//time started in js is 1 jan 1970
//to compare dates we see the milliseconds
//to give direct date then format is mm-dd-yyyy


let mydate= new Date
//console.log(mydate.toString())

let dob=new Date("03-31-2005")
console.log(dob.toDateString())
console.log(dob.toLocaleDateString())
console.log(dob.toLocaleString())
console.log(dob.toLocaleTimeString())
