// ++x (prefix) → increase first, then use the value.
// x++ (postfix) → use the value first, then increase it.
let x = 10;

console.log(++x); // 11
console.log(x++); // 11
console.log(x);   // 12

//QUESTION 2:-
let x = 1;

let y = ++x + x++ + ++x;

console.log(y);//8