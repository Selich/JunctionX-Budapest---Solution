var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/barcode', function(req, res, next) {
  console.log(JSON.parse(res))
  res.write("works");
});

module.exports = router;
