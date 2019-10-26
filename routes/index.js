var express = require('express');
var router = express.Router();
var request = require('request')
var productService = require("../services/productService")
var charityService = require("../services/charityService")

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
    console.log(url)
    request(url, {
        headers: {
            'Ocp-Apim-Subscription-Key': 'd0b50598ab85402a9238cb2528924e3f',
        }
    }, (err, response, body) => {
        if (err) reject(err)
        res.send(body)
    })
});

router.post('/saveCharity', function(req, res, next) {
    // console.log(req.res)
    charityService.add(req.res)
    res.send('ddd')

});

router.get('/getCharity', function(req, res, next) {
    // console.log(req)
    res.send(
        charityService.get(req.res))
});

module.exports = router;