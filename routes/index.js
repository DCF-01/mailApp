var express = require('express');
var router = express.Router();
const { handleSend } = require('../controllers/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/send', function(req, res, next) {
    handleSend();
    res.render('index', { title: 'Express'});
});


module.exports = router;
