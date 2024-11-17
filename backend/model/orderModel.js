const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    freelancerId:{type:String,required:true},
    image:{type:String,required},
    title:{type:String,required},
    price:{type:Number,required},
    sellerId:{type:String,required:true},
    buyerId:{type:String,required:true},
    isCompleted:{type:Boolean,default:false},
    payment:{type:String,required:true},
    
},
{
    timestamps:true,
});

module.exports = mongoose.model('order', orderSchema);
