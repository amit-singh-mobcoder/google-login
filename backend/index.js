import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './models/dbConnection.js';
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors())

import authRouter from './routes/authRouter.js'
app.use('/auth', authRouter)



app.get('/', (req, res) => {
    res.send('Hello from Auth server')
})

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is listening at http://localhost:${PORT}`)
    })
})
