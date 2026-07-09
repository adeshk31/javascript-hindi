//THERE ARE TWO METHODS TO COMBINE AN ARRAY
//MOST CONVIENIENT TO USE IS SPREAD METHOD
//SPREAD [...ARR1,...ARR2,100,...ARR3]
//CONCAT():- ARR1.CONCAT(ARR2)
const heros=["hulk","cap","ironman"]
const dc_heros=["batman","superman",'flash']

const all_heros=[...heros,...dc_heros] //spread method to combine arrays
console.log(all_heros)