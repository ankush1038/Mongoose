const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    "username":{
        type:String,
        required : [true,"Useranme must be specified"],

    },
    "age":{
        type:Number,
        min:[10,"Minimum message should be 10"],
        max:[30,"Maximum age is 30"]
    },
    
    "password" : String,
    "role" : String,
    "Firstname" : String,
    "Lastname" : String
})

userSchema.virtual("Name").get(function(){
    return this.Firstname + " " +this.Lastname; 
})
userSchema.virtual("Name").set(function(data){
    let arr = data.split(" ");
    this.Firstname = arr[0];
    this.Lastname = arr[1];
})
module.exports = mongoose.model("users",userSchema);