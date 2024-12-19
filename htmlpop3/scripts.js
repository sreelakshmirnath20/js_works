// const data=fetch("https://fakestoreapi.com/products")
// data.then(val=>val.json()).then(res=>console.log(res)).catch(err=>console.log(err))

const data=fetch("https://fakestoreapi.com/products")
data.then(val=>val.json()).then(res=>{
    let rows=""
    res.forEach(item=>{
        rows+=`
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" style="height: 350px;" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.price}</p>
             </div>
        </div>
        
        `
    })
    console.log(rows)
    d1.innerHTML=rows
    
}).catch(err=>console.log(err))