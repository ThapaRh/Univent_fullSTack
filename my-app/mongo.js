const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://FieldofHonor:oBOfvWF7zwe8KkLa@cluster0.9paepmq.mongodb.net/Fieldofhonor?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected!");
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}) 

const collection = mongoose.model("collection",newSchema)

module.exports = collection