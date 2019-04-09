express = require('express');
users = require('./users');
auth = require('./auth')
rm = express();
var bodyParser = require('body-parser');

rm.use(bodyParser.json());

rm.use('/status', (req, res, next) => {
    res.json({status: 'Server running!'})
})

rm.use('/users', users)

rm.use('/login' , auth)





module.exports = rm;