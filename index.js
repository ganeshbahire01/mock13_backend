const express=require('express')
const userRoutes = require('./Routes/User.route')
const cors = require('cors')
const connection = require('./config/db')
const appoinmentRoutes = require('./Routes/Appoinment.route')
require('dotenv').config()


const app= express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoutes)
app.use("/appoinment",appoinmentRoutes)
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(process.env.port ,async()=>{
    try {
        await connection
        console.log("conneted to DB")
    } catch (error) {
        console.log("DB Error")
    }
    console.log('server is running')

})
// https://pear-powerful-cheetah.cyclic.app/