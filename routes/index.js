var express = require('express');
var router = express.Router();


data = ""
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/barcode', function(req, res, next) {
  console.log(JSON.parse(res))
  data = JSON.parse(res)
});

module.exports = router;
