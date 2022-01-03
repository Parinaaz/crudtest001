const express = require('express');
const bodyParser=require('body-parser');
//const { urlencoded } = require('body-parser');
const app = express();
app.listen(process.env.PORT || 3000,function(){
    console.log("Hello from Arzaan baby");
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/article",(req,res)=>{
    res.send("Hi this is article");
    console.log(req.body)
    
})