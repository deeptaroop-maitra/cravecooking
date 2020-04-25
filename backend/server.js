const express = require("express");
const bodyParser = require("body-parser");
const api= require("./routes/api");
const app= express();

const PORT = 3000;
app.use(bodyParser.json());
app.use("/api", api);


app.get("/",(req,res)=>{
    res.send("Working"); 
});

app.listen(PORT,(err)=>{
    if(err)
    {
        console.error(err);
    }
    else{
        console.log("Listening on port", PORT);
    }
});
