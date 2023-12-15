function add(a: number){
    return a*a;
}

console.log(add(5));

// This function will return a number, but we haven't specified that in the function definition.
// This is where return type annotations come in.

// Arror function syntax:
const add2 = (a: number): number => {return a*a;}

console.log(add2(10));