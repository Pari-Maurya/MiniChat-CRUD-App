const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  to :{
    type: String,
    required: true
  },
  message: {
    type: String,
    maxLength: 500
  },
  created_at:{
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
