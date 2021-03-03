const express = require('express');
const router = express.Router();
const { handleSend } = require('../controllers/acc_app_ctrl');

let msg = {
    to: 'itxtechnologies.mk@gmail.com',
    subject: 'aws ses test', // Subject line
    html: '<p>hello tttttthereeeee!</p>'
}

router.get('/', function(req, res, next) {
    handleSend(msg);
    res.render('index', { title: 'Niiiice'});
})

module.exports = router;