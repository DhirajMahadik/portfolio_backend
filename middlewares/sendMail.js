import nodemailer from 'nodemailer'

const sendMail = (name, message, email, phone) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "dhirajdemo9221@gmail.com",
            pass: 'fywqzgkgzgvtwant'
        }
    })

    const mailOptions1 = {
        from: "dhirajdemo9221@gmail.com",
        to: email,
        subject: "Tank you",
        html: '<p> hello ' + name + ' thank you for contacting I will get back to you ASAP </p>'
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


