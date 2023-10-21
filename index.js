import express from 'express'
import env from 'dotenv'
import connect from './db_connection/config.js'
import cors from 'cors'
import contactFormHandler from './routes/contact-form-handler.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin:'https://dhirajm.netlify.app',
    methods:['GET','POST']
}))
env.config()

app.use('/api',contactFormHandler)


connect.connect((error)=>{
    if(error) throw error;
    app.listen(process.env.PORT,()=>{
        console.log('Server is running')
    })
})