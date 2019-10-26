const mongoose = require('mongoose')
const env = require('./env/env')

mongoose.Promise = global.Promise;




const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.port}.documents.azure.com:${env.cosmosPort}/?ssl=true`;


function conn() {
    return mongoose.connect(mongoUri, {useMongoClient: true});

}


module.exports  = { 
    conn,
    mongoose
}
