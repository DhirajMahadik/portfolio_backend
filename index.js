import express from 'express'
import connect from './db_connection/config.js'
import cors from 'cors'
import contactFormHandler from './routes/contact-form-handler.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api',contactFormHandler)


connect.connect((error)=>{
    if(error) throw error;
    app.listen(5500,()=>{
        console.log('Server is running')
    })
})