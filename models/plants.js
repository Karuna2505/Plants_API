const mongoose =require("mongoose");

const plantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image_url:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model('Plant',plantSchema);