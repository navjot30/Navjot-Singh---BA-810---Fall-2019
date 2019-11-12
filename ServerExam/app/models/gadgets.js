var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var gadgetSchema = new Schema({
    yoo: { type: String, required: true },
    hoo: { type: Number, default: 10 }
});

module.exports = Mongoose.model('Gadgets', gadgetSchema);
