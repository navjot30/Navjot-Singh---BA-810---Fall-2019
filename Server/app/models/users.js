var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    active: { type: Boolean, default: true },
    email: { type: String, required: true, unique : true},
    password: { type: String, required: true },
    registerDate: { type: Date, default: Date.now }
});

module.exports = Mongoose.model('User', userSchema);

