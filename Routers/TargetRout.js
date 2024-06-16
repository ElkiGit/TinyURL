import express from 'express'
import TargetCon from '../Controllers/TargetCon.js'
const TargetRouter=express.Router()

TargetRouter.get('/:id',TargetCon.getById)

export default TargetRouter