//THERE ARE TWO METHODS TO COMBINE AN ARRAY
//MOST CONVIENIENT TO USE IS SPREAD METHOD
//SPREAD [...ARR1,...ARR2,100,...ARR3]
//CONCAT():- ARR1.CONCAT(ARR2)
const heros=["hulk","cap","ironman"]
const dc_heros=["batman","superman",'flash']

const all_heros=[...heros,...dc_heros] //spread method to combine arrays
//console.log(all_heros)
//+++++++STATIC ARRAY METHODS+++++++++
		
//Array.isArray()	
// Checks if a value is an array	
// Array.isArray([1,2]) → true

//Array.from()	
// Creates an array from another iterable (like a string)	
// Array.from("abc") → ['a','b','c']


//Array.of()	
// Creates an array from the given values	
// Array.of(1,2,3) → [1,2,3]

const arr=[1,2,3]
const str="adesh"
console.log(Array.isArray(str))//CHECKS IS IT ARRAY

console.log(Array.from(arr)) //USED TO MAKE ARRAY FROM SOMETHING LIKE STRING

console.log(Array.of("neha","manisha"))//used to make array of given values
