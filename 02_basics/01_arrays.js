//ARRAYS IN JS ARE RESIZEABLE (DYNAMIC) NOT FIXED SIZE
//DIFFERENT DATATYPE CAN BE STORED IN ARRAYS IN JS UNLIKE OTHER LANG LIKE C++ OR JAVA I.E STIRNG,NUMBER CAN BE STORED IN SINGLE ARRAY
//ARRAY COPY OPERATIONS CREATE SHALLOW COPIES
//SHALLOW COPY:-Outer object is copied. Inner objects are shared.
//DEEP COPY:-Outer object is copied. Inner objects are ALSO COPIED.

let myarr=[18,42,53,60,62,74,76]
//console.log(myarr) //TO PRINT WHOLE ARRAY
//console.log(myarr[0]) //TO PRINT A SINGLE ELEMENT
//console.log(typeof myarr)//

//+++++++++++METHODS OR OPERATIONS ON ARRAY+++++++++++
           //Add at end → push()
           //Remove from end → pop()
           //Add at front → unshift()
           //Remove from front → shift()
           //length → How many?
           //includes() → Is it there?
           //indexOf() → Where is it?
           //join() → Make it one string.

myarr.push(17)
myarr.pop()
myarr.unshift(56)
myarr.shift()

console.log(myarr.length)
console.log(myarr)

