const { Schema, model } = require('../config/db-connection');

const productsSchema = new Schema({
  business: {
    type: String,
    require: true,
  },
  businessId: {
    type: String,
    require: true,
  },
  product: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: String
});

module.exports = model('Products', productsSchema);
productsSchema.index({ business: 1, type: 1 });