var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/prev', function(req, res, next) {
  res.render('prev');
});

module.exports = router;
