const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const uri = "mongodb://mongo-db-junctionx:RHLKCcwNYPgTOEIdlSVxri6IuGX7DmVP489M0ljKcEH4qxkoMUwHbN8vhm5vEUDs1AfT3oEPf5jiaA35bMYi2g==@mongo-db-junctionx.documents.azure.com:10255/?ssl=true&replicaSet=globaldb"

function connect() {
    return mongoose.connect(uri,{useMongoClient: true})
}


module.exports = {
    connect,
    mongoose
};