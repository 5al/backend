const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:p3K7x1NvNfa8pKdG@cluster0.hhlzopf.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));