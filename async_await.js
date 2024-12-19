// ASYNCHRONOUS

// async function dispaly() {

//     return "Hello"
    
// }
// res=dispaly()
// console.log(res)
// res.then(item=>{
//     console.log(item);
    
// })


// await function 
// async function display() {
//     const newPromise=new Promise((res, rej) => {
        
//         setTimeout(() => {

//             res("hello")
            
//         }, 3000);
//     })
//     const res=newPromise
//     res.then(item=>{
//         console.log(res);   
//     })
//     console.log("program ended!!");
    
// }
// display()



// await function Implemented only in an async function 
async function display() {
    const newPromise=new Promise((res, rej) => {
        
        setTimeout(() => {

            res("hello")
            
        }, 3000);
    })


    const res=await newPromise
    
    console.log(res);   
    
    console.log("program ended!!");
    
}
display()