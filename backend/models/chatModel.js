
const mongo= require('mongoose')

const chatModel= mongo.Schema(
    {
        chatName:{type:String,trim:true},
        isGroupChat:{type:Boolean,default:false},
        users:[{
            type:mongo.Schema.Types.ObjectId,
            ref:"User",
        },
       ],
        latestMessage:{
        type:mongo.Schema.Types.ObjectId,
        ref:"Message",
       },
        groupAdmin:{
        type:mongo.Schema.Types.ObjectId,
        ref:"User",
       },
       },
      {
        timestamps:true,
      }
);

const Chat =mongo.model("Chat", chatModel)
module.exports=Chat