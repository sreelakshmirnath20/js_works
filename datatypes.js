// a="10.5"
// n=Number(a)
// console.log(n);
// console.log(typeof(n));

// a="10.5"
// n=parseInt(a)
// console.log(n);
// console.log(typeof(n));


// a="10.5"
// n=parseFloat(a)
// console.log(n);
// console.log(typeof(n));





// String
// a="apple is red"
// a="apple is \"red\""
// a="apple is \nred"
// a="apple is \bred"
// a="apple is \tred"
// a="apple is \vred"

// console.log(a);



// a="apple is red"
// console.log(a.length);

// a="apple is red"
// res=a.charAt(2)
// console.log(res);

// res=a.slice(1,3)
// res=a.slice(-3,-1)
// res=a.slice(3)
// console.log(res);


// res=a.substring(1,7)
// res=a.substring(-3,-1)
// console.log(res);


// res=a.toUpperCase()
// console.log(res);

// res=a.concat(" in color")
// console.log(res);

// res=a.concat([" and","round"])
// console.log(res);


// b="        apple    "
// console.log(b.trim());


// res=a.repeat(2)
// console.log(res);





// 09/12/20024
// Monday

// ----replace
// a="apple is red"
// res=a.replace("red","round")
// console.log(res);


// ---search
// a="apple is red"
// res=a.search("red")
// console.log(res);


// a="apple is red"
// res=a.search("fred")
// console.log(res);




// ---includes
// a="apple is red"
// res=a.includes("red")
// console.log(res);


// a="apple is red"
// res=a.includes("fred")
// console.log(res);


// ->Boolean
// a="apple is red"
// res=a.Boolean(0)
// console.log(res);


// ->Object
// a={"name":"ajay","age":30}
// console.log(a);

// a={name:"ajay",age:30}
// console.log(a);

// a={name:"ajay",age:30}
// console.log(a['name']);

// a={name:"ajay",age:30}
// a.class="BCA"
// console.log(a);



// ->Spread Operators 

// a={name:"ajay",age:30}
// b={class:"BCA"}
// c={...a,...b}
// console.log(c);



// ->Array 
// a=[1,2,3,"apple"]
// console.log(a);

// a=[1,2,3,"apple"]
// a[2]="red"
// console.log(a);

// a=[1,2,3,"apple"]
// console.log(a.length);


// a=[1,2,3,"apple"]
// a[6]="k/+iwi"
// console.log(a);
// console.log(a.length); //the two spaces are empty but valid




// lopping  for..in and for..of 

// a=[1,2,3,"apple"]
// for (i=0;i<a.length;i++){
//     console.log(a[i]);
    
// }

// a=[1,2,3,"apple"]
// for(i of a){
//     console.log(i);
    
// }

// b={name:"Ajay",age:26}
// for( i in b){
//     console.log(i);
    
// }
// b={name:"Ajay",age:26}
// for( i in b){
//     console.log(b[i]);
    
// }

// a="apple is red"
// for( i of a){
//     console.log(i);
    
// }




// print consoanants

// a="Apple is a phone"
// vowels="aeiouAEIOU"
// for (i of a){
//     if(!vowels.includes(i))
//     console.log(i);
    
// }


// without built in methods 
// a='apple is red'
// for(i of a){
//     if(i!="a" && i!="e" && i!="i" && i!="o" && i!="u" )  
//         console.log(i);
        
// }


// Array class method 
// a=[1,2,3,"apple"]
// res=a.at(2)
// console.log(res);

// a=[1,2,3,"apple"]
// res=a.join("_")
// console.log(res); //joins and becomes string //for converting string into array split is used


// a=[1,2,3,"apple"]
// res=a.pop()
// console.log(res);


// a=[1,2,3,"apple"]
// res=a.push("kiwi")
// console.log(res);
// console.log(a);


// a=[1,2,3,"apple"]
// res=a.shift()
// console.log(res);
// console.log(a);


// a=[1,2,3,"apple"]
// res=a.unshift(12)
// console.log(res);
// console.log(a);

// a=[1,2,3,"apple"]
// delete a[2]
// console.log(a);


// a=[1,2,3,"apple"]
// res=a.concat([12,13])
// console.log(res);
// console.log(a);

// a=[1,2,3,"apple"]
// res=a.slice(1,3)
// console.log(res);

// res=a.slice(1,)
// console.log(res);


// a=[1,2,3,"apple"]
// a.reverse()
// console.log(a);





// 10/12/2024
// tuesday


// --flat 
// a=[1,2,[1,2,3],[4,5],[7,8,[9,10]]]
// res=a.flat(1)
// console.log(res);


// a=[1,2,[1,2,3],[4,5],[7,8,[9,10]]]
// res=a.flat(2)
// console.log(res);



// splice -insertion and removal are possible at the same time

// a=[1,2,3,"apple","kiwi"]
// res=a.splice(1,2,"banana")  //startingIndex,deleteIndex ,i&2 indexed number are deleted and replaces by banana
// console.log(res);
// console.log(a);

// a=[1,2,3,"apple","kiwi"]
// res=a.splice(1,2,"banana",87,45)
// console.log(res);
// console.log(a);

// a=[1,2,3,"apple","kiwi"]
// res=a.splice(1,0,"banana")
// console.log(res);
// console.log(a);



// sort 

// a=["kiwi","apple","strawberry","banana","orange"]
// a.sort()
// console.log(a);

// a=["kiwi","apple","strawberry","banana","orange"]
// a.sort()
// a.reverse()
// console.log(a);


//in case of numbers-
// callback function is used:
// asending order 

// a=[12,3,4,56,34,2,6,7,8]
// cmp=(a,b)=>a-b
// a.sort(cmp)
// console.log(a);

// a=[12,3,4,56,34,2,6,7,8]
// a.sort((a,b)=>a-b)
// console.log(a);

// here callback function is used for sorting numbers 
// here we only mentioned the memmory location of the existing code 
// descending order 
// a=[12,3,4,56,34,2,6,7,8]
// cmp=(a,b)=>b-a
// a.sort(cmp)
// console.log(a);

// a=[12,3,4,56,34,2,6,7,8]
// a.sort((a,b)=>b-a)
// console.log(a);














