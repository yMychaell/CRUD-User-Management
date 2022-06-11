const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config('../config/config');

const connectDB = async () => {

  try {
    
    const conn = await mongoose.connect(process.env.DB_URI)

    console.log(`MongoDB connected on: ${conn.connection.host}`.underline.blue)

  } catch (error) {
    console.log(error)
  }

}

module.exports = connectDB;
