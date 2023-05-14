/* eslint-disable no-path-concat */
import express from 'express'
import morganMiddleware from './middlewares/morganMiddleware'
import userRoute from './routes/userRoute'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
dotenv.config()

const app = express()

app.use(helmet())
app.use(morganMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/user', userRoute)

app.get('/', (request, response) => {
  return response.json({ message: 'Welcame to SOLID nodejs API' })
})

export default app
