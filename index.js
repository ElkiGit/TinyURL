import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './database.js'
import LinksRouter from './Routers/LinkRout.js'
import UsersRouter from './Routers/UserRout.js'

dotenv.config()
connectDB()
const app = express()
const port = 3000



app.use(cors())
app.use(express.json());

app.use('/links', LinksRouter)
app.use('/users', UsersRouter)

app.listen(port, () => {
    console.log(`port: http://localhost:${port}`)
})