const mongoose=require('mongoose');

const connectToDb=async()=>{ 
    await mongoose.connect(process.env.DB_CONNECT,{
        useNewUrlParser:true,
        
    }).then(()=>{
        console.log('Database connected successfully');
    }).catch((err)=>{
        console.log('Database connection failed',err);
    });
}

module.exports = connectToDb;
