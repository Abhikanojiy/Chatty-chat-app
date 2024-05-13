

const mongo=require('mongoose')


const connectDB=async()=>{
    try{
        const opt={
            
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,

        }
        await mongo.connect(process.env.DB_URl,opt,chat-app)
        console.log('connected')
    }
    catch(err){
        console.log('cannot connect')
    }

}

module.exports=connectDB