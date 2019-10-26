const Product = require("../models/product-model");
const ReadPreference = require('mongodb').ReadPreference


require('../mongo.js').connect();

function get(req,res){
    const docquery = Product.find({}).read(ReadPreference.NEAREST);
    docquery.exec().then(data => res.json(data))
    .catch(err => { res.status(500).send(err)})
}

module.exports = {
  get
  // add
};
