const mongoose = require("mongoose");
const { Schema } = mongoose;

const SalesSchema = new Schema({
    internalId: {
        type: String,
        required: true,
        unqiue: true,
    },
    sellerName: {
        type: String,
        required: true,
    },
    buyerId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    paymentMethodId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    products: {
        type: [{
                internalId : String,
                name: String,
                size: String,
                color: String,
                quantity: Number,
                cost: Number,
            }],
        required: true,
    },
    deliveryAdress: {
        type: String,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

SalesSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret._id;
    }
})

SalesSchema.set('toObject', {
    transform: function (doc, ret) {
        delete ret._id;
    }
})

const Sales =  mongoose.model("sales", SalesSchema);

module.exports = Sales;