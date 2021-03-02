const mongoose=require('mongoose');

const BrandSchema = new mongoose.Schema({
    bid:{
        type:Number, 
        required:true
    },
    email:{type:String, required:true},
    passwordHash:{type:String, required:true},
    bname:{type:String,required:true},
    btype:{type:String,required:true},
    bowner:{type:String, required:true}
})

// to make collection in database cloud  

//export to other files 
module.exports = mongoose.model("Brand",BrandSchema);;