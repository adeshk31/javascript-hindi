//var:function based ,var can be accessed only in funct.
//const, let:scope based,let const can be accessed in the scope {}
{
    var a=10;
    let b=15;
    const c=77;
} 
console.log(a)
console.log(b)
//clearly var a =10 will be printed but the let b=15 will not be printed because it is written outside the scope{}