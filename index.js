const express = require('express');
const mongoose = require('mongoose');
const app = express();  
const port = 3000;
const path = require('path');
const Chat = require('./models/chat.js');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


main().then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
async function  main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsApp');
}

let chat1 = new Chat({
  sender: 'Alice',
  to: 'Bob',
  message: 'Hello, Bob!',
  created_at: new Date(),
});

chat1.save().then((res) => {
  console.log(res);
}).catch((error) => {
  console.error('Error saving chat message:', error);
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});