// function add(a,b,c){
//     return a+b+c ;

// }
// console.log(add(1,2,3,4,5)); // if only consider the first three values 


// Rest Operator 
// in front of any literal if we place ... then it it rest operator


/*

function add(...numbers){  // ... rest operator === collect multiple values  as input and it  convert it into array
 let total = 0;
 //for(let i=0; i<numbers.length ; i++){
 for(let i in numbers){
    total+= numbers[i];
 }
 return total;
}


//console.log(add([1,2,3,4,5]));
console.log(add(1,2,3,4,5));




function add(...numbers){  
 let total = 0;
 for(let i of numbers){
    total+= i; // 
 }
 return total;
}

console.log(add(1,2,3,4,5));

*/

/*

let a = [1,2,3,34,45,88]

let[first,sec , ...last] = a;
console.log(first,sec,last); // 1 2 [ 3, 34, 45, 88 ]

console.log(first,sec,...last); // 1 2 3 34 45 88




// Spread 

// let arr1 = [10,20,30]

// let arr2 = [...arr1];

// console.log(arr2);

// best example of spread and combine using rest Operator
function test(...args){
    console.log(args);
    
}

let arr = [1,2,3]
test(...arr)


*/


 // even and odd using arrow function
const checkevenandodd = (num) =>{
    if(num%2 == 0){
        console.log("Even number");
        
    }else{
        console.log("Odd number");
        
    }
};
//checkevenandodd(10);
//checkevenandodd(15);


// const avgmarks = (num)=>{
//     if(num >=40){
//         console.log("Pass");   
//     }else{
//         console.log("Fail"); 
//     }
// }
// avgmarks(40);
// avgmarks(31);
// avgmarks(60);



const checkResult = (marks) => {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let avg = sum / marks.length;

    if (avg > 40) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
};


checkResult([45, 50, 38, 60]);
checkResult([30, 35, 40]);
       




