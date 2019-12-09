var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var ProductSchema = new Schema({
    userid: { type: Schema.Types.ObjectId }, //required: true },
    product: { type: String, required: true },
    detail: { type: String, required: true },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    status: {
        type: String,
        Enum: ['Available', 'Out of stock,', 'Arriving soon.'],
        default: 'Available'
    },
    expiryDate: { type: Date, default: Date.now },
    manufacturedDate: { type: Date, default: Date.now }
});

ProductSchema.pre('save', function(next) {
    var product = this;
    if (this.isModified('quantity') || this.isNew) {
        if (product.quantity <= 0 && product.status === 'Available') {
            return next(
                new Error(
                    "Invalid input. If quantity is 0 you cannot put the status to be 'Available' ."
                )
            );
        } else {
            next();
        }
    } else {
        return next();
    }
});

module.exports = Mongoose.model('products', ProductSchema);
