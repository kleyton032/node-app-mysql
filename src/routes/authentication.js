const express = require('express')
const router = express.Router();

const require = ('../lib/passport')

router.get('/signup', (req, res) =>{
    res.render('auth/signup')
});


module.exports = router