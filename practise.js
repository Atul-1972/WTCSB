// add two numbers 

const add = (a,b) => a+b;

let num1 = Number(5);
let num2  = Number(10);

let sum = add(num1,num2)

console.log(sum);



// swap two number 

const swap  = (a,b) =>{
    let temp = a;
    a= b ;
    b = temp

    return[a,b];
    

}

let num = Number(5);
let num0 = Number(3);


