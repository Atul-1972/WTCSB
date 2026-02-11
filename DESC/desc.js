 const student = {
      name :"Atul",
      age: 21,
      address:{
        City:"Siddharth Nagar",
        state: "UP"
      }
    }


    // const name = student.name 
    // const age = student.age
    // console.log(name);
    // console.log(age);


    // const {name,age} = student

    // console.log(name,age);
    
//    const {name: stuname = "Khushhal",age} = student // ye se name walai value tabi use mai ayyegi jab main object me koi value nahi hogi
//    console.log(stuname , age); // stuname name ki jagha use ho rahi hai 




 /*
***** Destructing of Objects ***** 

// by passing object 
 function displaystu(object) {
     console.log(`My name is ${object.name} and age is ${object.age}`);
    
 }

 displaystu(student);



function displaystu({name,age}) {
    console.log(`My name is ${name} and age is ${age}`);
    
}

displaystu(student);

*/




// let numbers = [10,20,30]

// let [a,b,c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);


// let numbers = [10,20,30]

// let a,b,c = numbers;
// console.log(a);
// console.log(b);
// console.log(c);


// let data = [1,2];
// let[a=10 ,b=20] = data;
// console.log(a);
// console.log(b);


let p = 5;
let q = 10;
[p,q]  = [q,p];
console.log(p);
console.log(q);








   

    

    
    