// 11/12/2024
// wednesday

// print square value of every elements form given array
// a=[12,3,45,77,109,19,11,8]


// a=[12,3,45,77,109,19,11,8]
// for(i of a){
//     console.log(i**2);
    
// }



// a=[12,3,45,77,109,19,11,8]
// function square(item){
//     console.log(item**2);
// }
// for(i of a){
//     square(i)
    
// }

// forEach Function

// a=[12,3,45,77,109,19,11,8]
// function square(item){
//     console.log(item**2);
    
// }
// a.forEach(square)


// arrow function 
// a=[12,3,45,77,109,19,11,8]
// a.forEach((item)=>(console.log(item**2)))


//map Function

// a=[12,3,45,77,109,19,11,8]
// res=a.map((item)=>item**2)
// console.log(res);



// // filter function
// a=[12,3,45,77,109,19,11,8]
// res=a.filter((item)=>item%2==0)
// console.log(res);

// find function 
// a=[12,3,45,77,109,19,11,8]
// res=a.find((item)=>item%2==0)
// console.log(res);


// reduce function 
// a=[12,3,45,77,109,19,11,8]
// res=a.reduce((prev,item)=>prev+item)
// console.log(res);

// a=[12,3,45,77,109,19,11,8]
// res=a.reduce((prev,item)=>prev+item,1)
// console.log(res);



// every and some function 
// a=[12,3,45,77,109,19,11,8]
// res=a.some(item=>item==0)
// console.log(res);

// a=[12,3,45,77,109,19,11,8]
// res=a.some(item=>item%2==0)
// console.log(res);

// a=[12,3,45,77,109,19,11,8]
// res=a.every(item=>item%2==0)
// console.log(res);


dataset=[
    {name:"Ajith",class:"BCA",m1:23,m2:45},
    {name:"sujith",class:"BCA",m1:30,m2:40},
    {name:"Renjith",class:"BCA",m1:19,m2:35},
    {name:"Ajay",class:"BCA",m1:17,m2:49},
]
// print the name of every students 
// dataset.forEach(item=>{
//     console.log(item.name);
    
// })

//show an array of classes form dataset
// res=dataset.map(items=>items.class);
// console.log(res);


// distinct -home work
//find the students with score more than 25 in m1
// res=dataset.filter(items=>items.m1>25);
// console.log(res);

// res=dataset.filter(item=>item.m1>25);
// res.forEach(item=>console.log(item.name));


// chain method 
//  dataset.filter(item=>item.m1>25).forEach(item=>console.log(item.name));


//find average mark of every students for m2
// res=dataset.reduce((prev,items)=>prev+items.m2,0)/dataset.length
// console.log(res);

// avg=res/dataset.length



// find the name of student with high score of m1
// dataset.reduce(item=>item.m1>25).forEach(item=>console.log(item.name));
res= dataset.reduce((prev, item) =>item.m1>item.m1? item : prev)
console.log(res);
