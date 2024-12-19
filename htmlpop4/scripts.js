const data=fetch("https://fakestoreapi.com/users")
data.then(val=>val.json()).then(res=>{
    let rows=""
    res.forEach(item=>{
        rows+=`
        <tr>
        <td>${item.id}</td>
        
        <td>${item.username}</td>
        <td>${item.email}</td>
        

        
    </tr>
        
        `
    })
    console.log(rows)
    tb1.innerHTML=rows
    
}).catch(err=>console.log(err))