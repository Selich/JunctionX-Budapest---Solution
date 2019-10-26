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

router.get('/products', function(req, res, next) {
  console.log(res.body)

  productService.get(req,res)
});

router.post('/barcode', function(req, res, next) {
  productService.add(req,res)
});



module.exports = router;
