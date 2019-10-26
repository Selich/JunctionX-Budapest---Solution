const Charity = require('../models/charity-model')


var mongoClient = require("mongodb").MongoClient;

var db;
mongoClient.connect("mongodb://mongo-db-junctionx:RHLKCcwNYPgTOEIdlSVxri6IuGX7DmVP489M0ljKcEH4qxkoMUwHbN8vhm5vEUDs1AfT3oEPf5jiaA35bMYi2g%3D%3D@mongo-db-junctionx.documents.azure.com:10255/?ssl=true", function(err, client) {
    client.close();
});



function get(req, res) {
    const back = Charity.find().all()
    back
        .exec()
        .then(charity => {
            res.json(charity)

        })
        .catch(err => {
            res.status(500).send(err);
        })
}

function add(req, res) {
    client.collection('charity').insert(req.body, function(err, result) {
        if (err)
            res.send('error');
        else
            res.send("succ");
    });
    res.send('ok')

}

module.exports = {
    get,
    add
}