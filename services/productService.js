const Product = require('../models/product-model')
const preference = require('mongodb').ReadPreference;


require.apply('./mongo').connect();


function get(req,res) {
    const back = Product.find({}).read(preference.NEAREST)
    back.exec().then(products => res.json(products))
    .then(products => {
        res.json(products)

    })
    .catch(err => {
        res.status(500).send(err);
    })
}

function newProduct(req, res){
    const product = new Product(req.body)

    product.save().then(() => {
        res.json(product)
    }).catch(err => { res.status(500).send(err) })
}


module.exports = {
    get,
    newProduct
}

