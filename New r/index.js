// the probleam i understand that i have to create a route for calculate the avrage  without useing externer library.

const express=require('express');
const app=express();
const port=3000;

app.listen(port,async()=>{
    console.log("App is listing on port : ", port);
})

app.use(express.text());

// app.get("/",async(req,res)=>{
//     res.redirect("/getavg");
// })

app.get('/getavg/:num',async(req,res)=>{
    const body = req.params.num.trim();
    // console.log(body)
    const number= Array(body.split(" "));
    // console.log(number);


    if(number[0].length===0){
        return res.status(400).send('err :  nedd space sprated number');

    }

    // const sum= number[0].reduce((acc,val)=>{acc+val,0});
    let sum=0;
    for(i of number[0]){
        sum+=Number(i);
    }
    console.log(sum);
    const average=sum/number.length;
    
    // res.send("data got");
    res.send(`average : ${average}`);
});