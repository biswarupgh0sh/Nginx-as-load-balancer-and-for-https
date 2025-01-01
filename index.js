const express = require("express");
const path = require("path");

const port = 5000;

const app = express();

const app_name = process.env.APP_NAME;

app.use("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
    console.log(`/ is visited and server by ${app_name}`);
})


app.listen(port, ()=>{
    console.log(`${app_name}Server is listening on ${port}`);
})