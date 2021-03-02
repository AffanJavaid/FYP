const mongoose=require('mongoose');

const StoreSchema = new mongoose.Schema({
    sid:{type:Number, required:true},
    passwordHash:{type:String, required:true},
    sname:{type:String,required:true},
    slocation:{type:String,required:true},
    bid:{type:Number, required:true}
})
// to make collection in database cloud 
const Store = mongoose.model("Store",StoreSchema);

//export to other files 
module.exports = Store;