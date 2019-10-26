const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    gtin: 
    { type: Number , required: true, unique: true},
    tpnb: 
    { type: Number , required: true, unique: true},
    tpnc:
    { type: Number , required: true, unique: true},
    catId: 
    { type: String , required: true},
    description: String,
    brand: String,
    qtyContents: {
      quantity: Number,
      quantityUom: String,
      unitQty: String,
      numberOfUnits: Number
    },
    productCharacteristics: {
      isFood: Boolean,
      isDrink: Boolean,
      isHazardous: Boolean,
      storageType: String,
      isAnalgesic: Boolean,
      containsLoperamide: Boolean
    },
    pkgDimensions: [
      {
        no: Number,
        height: Number,
        width: Number,
        depth: Number,
        dimensionUom: String,
        weight:  Number,
        weightUom: String,
        volume: Number,
        volumeUom: String,
      }
    ],
    location: {
        long: Number,
        lat: Number
    }
})


const Product = mongoose.model('Product', productSchema)

module.exports = Product;

