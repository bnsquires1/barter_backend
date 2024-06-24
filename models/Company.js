const { Schema, model } = require('../config/db-connection');

const companySchema = Schema({
  business: {
    type: String,
    required: true,
    unique: true,
  },
  businessId: {
    type: Number,
    required: true,
    unique: true,
  },
  businessOwner: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model('Company', companySchema
);
