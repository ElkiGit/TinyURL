import express from 'express'

import UsersCon from '../Controllers/UserCon.js'

const UsersRouter=express.Router()

UsersRouter.get('/',UsersCon.getList)
UsersRouter.get('/:id',UsersCon.getById)
UsersRouter.post('/',UsersCon.add)
UsersRouter.put('/:id',UsersCon.update)
UsersRouter.delete('/:id',UsersCon.delete)

export default UsersRouter