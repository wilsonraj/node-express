import express from "express"
import doctorRoutes from './routes/doctor.routes.js'
const app=express()

app.get("/get",(req,res)=>{
res.json({"hey":"this wilson"})
})
app.use('/doctor',doctorRoutes)
app.listen("7000",()=>{
    console.log("hi buddy")
})