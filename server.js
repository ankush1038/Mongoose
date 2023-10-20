const express = require("express");
const app = express();
const client = require("mongoose");
client.connect("mongodb://127.0.0.1:27017/ProjectB").then((data)=>{
    console.log("Database Connected");
})

const User = require("./models/usermodels");
const { log } = require("console");

app.get("/save",(req,res)=>{
     //let obj = {}
    // obj.username = "test user"
    // obj.password = "password" 
    // obj.role = "user"

    // const userObj = new User(obj);
    // userObj.save();

    const userObj = new User();
    userObj.username = "Ankush"
    userObj.password = "123";
    userObj.role = "Student";
    userObj.age = 18;
    //userObj.Name = "Code Quotient";
    userObj.Firstname = "Code";
    
    userObj.Lastname = "Quotient";
    userObj.save();
    console.log(userObj.Name);
    //console.log(userObj.Firstname);
    res.end();

    
})

app.listen(3000,(err)=>{
    console.log("Started");
})