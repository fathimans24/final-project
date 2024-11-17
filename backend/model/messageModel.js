const mongoose=require('mongoose');
const messageSchema = new mongoose.Schema({
     CoversationId:{type:String,required:true},
     userId:{type:String,required:true},
     desc:{type:String,required:true},
     },{
    timestamps:true
});
export default mongoose.model("coversation",messageSchema);
