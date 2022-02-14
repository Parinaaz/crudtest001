const express = require('express');
const app = express();
const bodyParser=require('body-parser');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

let articleList = [];
app.listen(process.env.PORT || 3000,function(){
    console.log("Server running on "+process.env.PORT);
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")

})

app.post("/article",(req,res)=>{
    res.send("Hi this is article");
    console.log(req.body)
    articleList.push(req.body);
    localStorage.setItem("Articles",JSON.stringify(articleList));
    
})

app.get("/article", (req,res)=>{
   let arr = localStorage.getItem("Articles");

    res.send(arr)
})