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
/*
let message = {
    from: 'admin@paralax.mk',
    to: 'itxtechnologies.mk@gmail.com',
    subject: 'aws ses test', // Subject line
    html: '<p>hi<\p>'
} */

function cb(error, info){
    if(error){
        console.log(error);
    }
    else {
        console.log(info);
    }
}

function handleSend(message){
    transporter.sendMail(message, cb);
}

module.exports = {
    handleSend
}