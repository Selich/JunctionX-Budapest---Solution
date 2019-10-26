var express = require('express');
var router = express.Router();

var productService = require("../services/productService")


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("data")
  res.render('index', { title: 'Express' });
});

/* GET home page. */
// router.post('/barcode', function(req, res, next) {
//   productService.newProduct(req,res)
// });

router.post('/products', function(req, res, next) {
  console.log(res)

  // productService.get(req,res)
});

module.exports = router;
