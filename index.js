import express from "express"
import doctorRoutes from './routes/doctor.routes.js'
import mongodb from "./lib/db.js"
const app=express()
mongodb()

app.get("/get",(req,res)=>{
res.json({"hey":"this wilson"})
})
app.use('/doctor',doctorRoutes)
app.listen("7000",()=>{
    console.log("hi buddy")
})