/**
 * Created by mathurtx on 2/20/17.
 */
var express = require('express');
var router = express.Router();

/* GET contact us listing. */
router.get('/', function(req, res, next) {
    res.send('You make reservations here');
});

module.exports = router;