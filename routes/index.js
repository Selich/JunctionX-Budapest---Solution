var express = require('express');
var router = express.Router();

var productService = require("../services/productService")


data = ""
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/barcode', function(req, res, next) {
  productService.newProduct(req,res)
});

router.post('/products', function(req, res, next) {
  productService.get(req,res)
});

module.exports = router;
