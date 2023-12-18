const mongoose = require('mongoose');

const redeemCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    points: {
        type: Number,
        default: 100
    },
    isRedeemed: {
        type: Boolean,
        default: false
    },
    redeemedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    redeemedAt: {
        type: Date
    }
});

const RedeemCode = mongoose.model('RedeemCode', redeemCodeSchema);

module.exports = RedeemCode;
