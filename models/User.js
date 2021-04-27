<<<<<<< HEAD
const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model('User', userSchema);
=======
const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model('User', userSchema);
>>>>>>> ee253729eca0bdadb8f2defa667f6eb1007a533d
