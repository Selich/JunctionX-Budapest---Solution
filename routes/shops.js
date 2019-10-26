var express = require('express');
var router = express.Router();
var request = require('request');

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