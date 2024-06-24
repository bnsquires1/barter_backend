const { Schema, model } = require("mongoose")

const reviewSchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    comments: [
        {
        content: String,
        author: String,
    },
],
});

//Create the model that will control this collection
const Review = model("Review", reviewSchema)
//"string of the name of the model" for the first arg, sec. arg is the new schema we created.

module.exports = Review; 