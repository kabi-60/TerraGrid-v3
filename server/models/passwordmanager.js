const mongoose = require("mongoose")
const passwordSchema= new mongoose.Schema({
        browser:String,
        link:String,
        gmail:String,
        creatAt:String,
        password:String,
        category:String,
})
module.exports= mongoose.model("passwordManager",passwordSchema);