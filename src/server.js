const express = require("express");

const connect = require("./configs/db") 

const app = express();

app.listen("3456",()=>{ 
    console.log("Listening on port 3456")
})