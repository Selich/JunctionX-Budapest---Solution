const Product = require('../models/product-model')


var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://mongo-db-junctionx:RHLKCcwNYPgTOEIdlSVxri6IuGX7DmVP489M0ljKcEH4qxkoMUwHbN8vhm5vEUDs1AfT3oEPf5jiaA35bMYi2g%3D%3D@mongo-db-junctionx.documents.azure.com:10255/?ssl=true", function (err, client) {
  client.close();
});



function get(req,res) {
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

function add(req,res){
    
   client.collection('products').insert(req.body, function (err, result) {
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

