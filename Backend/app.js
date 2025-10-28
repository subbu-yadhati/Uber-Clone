const express=require('express');
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const connectToDb=require('./db/db')
const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')
const cookieParser=require('cookie-parser')


dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

console.log(process.env.DB_CONNECT);
connectToDb();

app.get('/',(req,res)=>{
    res.send("hello ");
})


app.use('/users',userRoutes)
app.use('/captains',captainRoutes)


module.exports=app