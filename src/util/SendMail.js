const nodemailer = require("nodemailer");

const sendMail = (code, email) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'PONE TU EMAIL',
            pass: 'PONE TU PASS'
        }
    });

    let info = transporter.sendMail({
        from: 'TU EMAIL DE NUEVO',
        to: email,
        subject: "ASUNTO",
        text: "HOLA ESTE ES EL EMAIL"
    });
}

module.exports = {
    sendMail,
}