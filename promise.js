const lot=2
const lottery_promise= new Promise((res,rej)=>{
    const selected_number=Math.ceil(Math.random()*5)
    if (lot==selected_number){
        res("you win lottery")
    }
    else{
        rej("you lose")
    }
})
lottery_promise.then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})