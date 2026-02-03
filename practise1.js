// calculator using arrow function
// const cal= ()=>({

// add: (a,b) => a+b,
// sub:  (a,b)=>  a-b,
// mul:  (a,b) => a*b,
// div: (a,b) => (b==0 ? "Error": a/b),

// });

// console.log(cal().add(10,5));
// console.log(cal().sub(10,5));
// console.log(cal().mul(10,5));
// console.log(cal().div(10,5));



// calculator using switch case and arrow function


const calculator = (operation, a, b) => {
  switch (operation) {
    case "add":
      return a + b;

    case "sub":
      return a - b;

    case "mul":
      return a * b;

    case "div":
      return b === 0 ? "error " : a / b;

    default:
      return "Invalid operation";
  }
};


console.log(calculator("add", 11, 5));
console.log(calculator("sub", 10, 5));
console.log(calculator("mul", 10, 5));
console.log(calculator("div", 10, 5));







