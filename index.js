const express=require('express')
const userRoutes = require('./Routes/User.route')
const { connection } = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const app= express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoutes)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(process.env.port||8080,async()=>{
    try {
        await connection
        console.log("conneted to DB")
    } catch (error) {
        console.log("DB Error")
    }
    console.log('server is running')

})