const express = require('express')
// console.log(express)
const app = express()
app.use(express.json());

const dotenv = require('dotenv')

dotenv.config({path:".env"})
const cors = require('cors');
app.use(cors());
const {connectdb} = require('./db/connect_db.js')
connectdb();


app.get("/",(req,res)=>{
    res.send('hello i am api')

})
const web = require('./routes/web.js');
app.use("/api/test",web)

app.listen(process.env.PORT,()=>{
    console.log(`server is running : ${process.env.PORT}`)
})


