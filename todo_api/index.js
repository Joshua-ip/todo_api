var express = require("express");
var app = express(),
    port = process.env.PORT || 3000,
    todoRoutes = require("./routes/todos.js");

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
    
app.get("/",function(req,res){
    res.sendFile("index.html");
})
    
app.use("/api/todos",todoRoutes);

app.listen(port,function(){
    console.log("app is running");
})