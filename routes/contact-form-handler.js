import express from 'express'
import sendMail from '../middlewares/sendMail.js';
import connect from '../db_connection/config.js';
const router = express.Router();

router.post('/submit-contact-form',(req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    sendMail(name,message,email,phone).then((response)=>{
       connect.query('insert into messages (name,email,message) values(?,?,?)',[name,email,message],(error,results)=>{
        if(error) throw error;
        console.log(results)
       })
        res.send(response)
    }).catch((error)=>{
       res.send(error)
       console.log("error")
    })
})

export default router;