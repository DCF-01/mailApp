const express = require('express');
const router = express.Router();
const { handleSend, handleEmail } = require('../controllers/acc_app_ctrl');

let msg = {
    from: 'admin@paralax.mk',
    to: 'itxtechnologies.mk@gmail.com',
    subject: 'aws ses test', // Subject line
    html: '<p>hello tttttthereeeee!</p>'
}

router.get('/', function(req, res, next) {
    handleEmail('0000',msg, 'itxtechnologies.mk@gmail.com');
    res.render('index', { title: 'Niiiice'});
})

module.exports = router;