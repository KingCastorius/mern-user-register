const mongoose = require('mongoose');
const crypto = require('crypto');

let UserSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  salt: String
})

UserSchema.method("setPassword", function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
})

let User = mongoose.model('User', UserSchema);

module.exports = User;
