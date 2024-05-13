const mongo=require('mongoose')


const messageModel=mongo.Schema({
    sender:{type:mongo.Schema.Types.ObjectId,ref:"User"},
    content:{type:String,trim:true},
    chat:{type:mongo.Schema.Types.ObjectId,ref:"Chat"},
},
    {
        timestamps:true,
    }

);

const Message=mongo.model("Message",messageModel)

module.exports=Message;