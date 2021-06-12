const { json } = require('express');
var express = require('express');
var router = express.Router();
const { handleSend } = require('../controllers/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/send', function(req, res, next){
    let message = req.body;
    
    let buff = Buffer.from(message.html, 'base64');
    let text = buff.toString('utf-8');
    message.html = text;
    
    console.log(message);
    handleSend(message);
    res.status(200);
})


module.exports = router;
