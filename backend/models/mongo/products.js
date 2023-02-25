const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, },
    category: { type: String },
    price: { type: Number },
    quantity: { type: Number },
},
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
    });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('products', schema);
