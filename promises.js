const p1=new Promise((resolve,reject) =>{
    setTimeout(()=>{
             resolve("success")

    },1000);
    
})
p1.then(console.log)