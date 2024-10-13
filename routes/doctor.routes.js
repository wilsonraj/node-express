import express from 'express'
import {getAllDoctor,getByIdDoctor,updateDoctor,createDoctor,deleteDoctor} from '../Api/doctor.api.js'
const route= express.Router()


route.get('/getAllDoctor',getAllDoctor)
route.post('/createdoctor',createDoctor)
route.get('/getById/:id',getByIdDoctor)
route.put('/updateDoctor/:id',updateDoctor)
route.put('/deleteDoctor/:id',deleteDoctor)
export default route