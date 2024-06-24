const { Schema, model } = require('../config/db-connection');

const reviewSchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    product: {
        type: String,
    },
    // email: {
    //     type: String,
    //     required: true
    // },
    review: [
        {
        content: String,
        author: String,
        email: String
    },
],
});

//Create the model that will control this collection
const Review = model("Review", reviewSchema)
//"string of the name of the model" for the first arg, sec. arg is the new schema we created.

module.exports = Review; 