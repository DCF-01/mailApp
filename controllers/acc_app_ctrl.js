const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'email-smtp.eu-central-1.amazonaws.com',
    port: '465',
    secure: true,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    },
    debug: true
});


function formatMessage(message) {
    message.from = 'admin@paralax.mk';
    return message;
}

function cb(error, info){
    if(error){
        console.log(error);
    }
    else {
        console.log(info);
    }
}

function handleSend(message){
    transporter.sendMail(formatMessage(message), cb);
}

module.exports = {
    handleSend
}