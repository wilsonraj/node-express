import express from 'express'
const route= express.Router()

route.get('/getAllDoctor',(req,res)=>{
  res.send("getAll doctor")
})
route.post('/createdoctor',(req,res)=>{

})
route.get('/getById/:id',(req,res)=>{

})
route.put('/updateDoctor/:id',(req,res)=>{

})
export default route