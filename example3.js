// Functions


// function display(a,b){
//     c=a+b
//     return c
// }

// output=display(10,40)
// console.log(output);


// recursive function

// function sumOfNumbers(limit){
//     if (limit==1){
//         return 1
//     }
//     else{
//         return limit+sumOfNumbers(limit-1)
//     }
// }
// result=sumOfNumbers(11)
// console.log(result);





// ***factorial

// function factorial(n){
//     if (n==1){
//         return 1
//     }
//     else{
//         return n*factorial(n-1)
//     }
// }
// result=factorial(10)
// console.log(result);



// arrow function of factorial 

// var f=(n)=>(n==1)?1:(n*f(n-1))
// result=f(5)
// console.log(result);


// addition of two numbers
// var a=(a,b)=>a+b

// console.log(a(10,22));



// remainder

// function remainder(a,b){
//     res=a%b
//     console.log(res);
    
// }
// remainder(20,3)

rem=(a,b)=>{
    console.log(a%b);
}
rem(10,3)