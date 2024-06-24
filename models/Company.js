const { Schema, model } = require('../config/db-connection');

const companySchema = new Schema({
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

companySchema.statics.findByBusiness = function () {
  return this.find({business});
};

module.exports = model('Company', companySchema
);