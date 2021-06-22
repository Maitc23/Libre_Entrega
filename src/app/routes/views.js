const router = require('express').Router();


router.get('/', function (req, res) {
	res.render('index',
	  {
        message: req.flash('loginMessage')
	  });

  });




module.exports = router
