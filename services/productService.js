const Product = require("../models/product-model");
const ReadPreference = require('mongodb').ReadPreference


require('../mongo.js').connect();

<<<<<<< HEAD
function get(req,res){
    const docquery = Product.find({}).read(ReadPreference.NEAREST);
    docquery.exec().then(data => res.json(data))
    .catch(err => { res.status(500).send(err)})
}

module.exports = {
  get
  // add
};
=======
mongoClient.connect("mongodb://mongo-db-junctionx:RHLKCcwNYPgTOEIdlSVxri6IuGX7DmVP489M0ljKcEH4qxkoMUwHbN8vhm5vEUDs1AfT3oEPf5jiaA35bMYi2g%3D%3D@mongo-db-junctionx.documents.azure.com:10255/?ssl=true", function(err, client) {
    client.close();
});



function get(req, res) {
    const back = Product.find().all()
    back
        .exec()
        .then(products => {
            res.json(products)

        })
        .catch(err => {
            res.status(500).send(err);
        })
}

function add(req, res) {

    client.collection('products').insert(req.body, function(err, result) {
        if (err)
            res.send('Error');
        else
            res.send('Success');
    });
    res.send("OK")
}

module.exports = {
    get,
    add
}
>>>>>>> 4796e0fa129ee29c7cfad36b421c8da734778f7b
