const mongoose=require('mongoose');
const conversationSchema = new mongoose.Schema({
     id:{type:String,required:true,unique:true},
     sellerId:{type:String,required:true},
     buyerId:{type:String,required:true},
     readByseller:{type:Boolean,required:true},
     readByBuyer:{type:Boolean,required:true},
     lastMessage:{type:String,required:false},
    
},{
    timestamps:true
});
export default mongoose.model("coversation",conversationSchema);

