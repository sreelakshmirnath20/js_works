// conditional statements 

// a=100
// b=20
// c=17
// if(a>b && a>c){
//     console.log("a is bigger");
    
// }
// else if( b>c){
//     console.log("b is bigger");
    
// }
// else{
//     console.log("c is bigger");
    
// }




// SWITCH 
// const dt=new Date()
// console.log(dt);

// console.log(dt.getDate());
// console.log(dt.getMonth());
// console.log(dt.getFullYear());
// console.log(dt.getSeconds());
// console.log(dt.getMinutes());
// console.log(dt.getHours());
// console.log(dt.getDay());

const dt=new Date()

switch(dt.getDay()){
    case 0:
        console.log("Sunday");
        break
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
         break     
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break
    default:
        console.log("Invalid case");
        break
        
}





