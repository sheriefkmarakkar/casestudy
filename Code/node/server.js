var express = require('express');

const app = express();
app.get("/",function(req,res){
res.send("Welcome to node server")
});

app.listen(9865, function(req,res){
    console.log("server started listening...");
})