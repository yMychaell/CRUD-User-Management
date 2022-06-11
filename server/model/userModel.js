const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: [true, "Please enter a name!"]
  },
  email: {
    type: String,
    required: [true, "Please enter a email!"],
    unique: true
  },
  gender: {
    type: String,
    required: [true, "Please provide your gender!"]
  },
  status: {
    type: String,
    required: [true, "Provide wether the user is active or not!"]
  }

})

const Model = mongoose.model('JSUser', userSchema);

module.exports = Model;
