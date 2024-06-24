require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

//connection event listeners (status of our connection)
mongoose.connection
  .on('open', () => console.log('Connected to Mongoose'))
  .on('close', () => console.log('Disconnected from Mongoose'))
  .on('error', (error) => console.log(error));

module.exports = mongoose;
