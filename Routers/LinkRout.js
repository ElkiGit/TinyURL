import express from 'express'
import LinksCont from '../Controllers/LinksCon.js'
const LinksRouter=express.Router()

LinksRouter.get('/',LinksCont.getList)
LinksRouter.get('/:id',LinksCont.getById)
LinksRouter.post('/',LinksCont.add)
LinksRouter.put('/:id',LinksCont.update)
LinksRouter.delete('/:id',LinksCont.delete)

export default LinksRouter