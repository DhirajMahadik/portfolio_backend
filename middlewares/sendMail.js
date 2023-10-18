import nodemailer from 'nodemailer'

const sendMail = (name, message, email) => {

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTH_PASSWORD
        }
    })

    const mailOptions1 = {
        from: "dhirajdemo9221@gmail.com",
        to: email,
        subject: "Tank you",
        html: '<p> hello ' + name + ' thank you for your message, I will get back to you ASAP </p>'
    }

    const mailOptions2 = {
        from: "dhirajdemo9221@gmail.com",
        to: "dhirajmahadik9221@gmail.com",
        subject: "Message from "+ name +"",
        html: '<p>Hello Dhiraj, <br> You have message from ' + name + ' <br> email : ' + email + ' <br> message : ' + message + ' </p>'
    }


    return new Promise((resolve, reject) => {
        try {
            transporter.sendMail(mailOptions1, (err, info) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(info)
                }
            })
            transporter.sendMail(mailOptions2, (err, info) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(info)
                }
            })
        } catch (error) {
            reject(error)
        }
    })

}


export default sendMail;


