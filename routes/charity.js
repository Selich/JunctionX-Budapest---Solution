var express = require('express');
var router = express.Router();

var charityService = require("../services/charityService")


router.post('/saveCharity', function(req, res, next) {
    console.log(req)
    res.send('ddds')
    charityService.add(req.res)
});

module.exports = router;