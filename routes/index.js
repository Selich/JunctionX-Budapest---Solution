var express = require('express');
var request = require('request');
var router = express.Router();

var productService = require("../services/productService")


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("data")
    res.render('index', {
        title: 'Express'
    });
});

/* GET home page. */
// router.post('/barcode', function(req, res, next) {
//   productService.newProduct(req,res)
// });

router.post('/products', function(req, res, next) {
    console.log(res)

    // productService.get(req,res)
});


// getting the closest tesco store
router.get('/shops', function(req, res, next) {
    dict = req.query
    url = "https://dev.tescolabs.com/locations/search?sort=near:\"" + dict['long'] + ', ' + dict['lat'] + "\"" + "&like=category:Store&fields=name&limit=5"
    request(url, {
        headers: {
            'Ocp-Apim-Subscription-Key': 'd0b50598ab85402a9238cb2528924e3f',
        }
    }, (err, response, body) => {
        if (err) reject(err)
        res.send(body)
    })
});
module.exports = router;