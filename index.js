import express from "express"

const app=express()

app.get("/get",(req,res)=>{
res.json({"hey":"this wilson"})
})
app.listen("7000",()=>{
    console.log("hi buddy")
})