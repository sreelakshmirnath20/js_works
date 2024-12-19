// async function getData(){
//     const result=await fetch('https://dummyjson.com/products')
//     const data=await result.json()
//     console.log(data)

//     let cards=''
//     data.products.forEach(item=>{
//         cards+=`
//         <div class="card" style="width: 18rem;">
//             <img src="${item.thumbnail}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${item.title}</h5>
//                 <p class="card-text">${item.pricd}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         `
//     })
//     prds.innerHTML=cards
// }
// getData()



// local &  sessionStorage
async function getData(){
    localStorage=setItem("name","Ajith")
    sessionStorage=setItem("name","Ajith")

    const result=await fetch('https://dummyjson.com/products')
    const data=await result.json()
    console.log(data)
    sessionStorage.setItem("data",JSON.stringify(data.products))

    let cards=''
    data.products.forEach(item=>{
        cards+=`
        <div class="card" style="width: 18rem;">
            <img src="${item.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.pricd}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    })
    prds.innerHTML=cards

    console.log(JSON.parse(sessionStorage.getItem("data")))
    
}
getData()