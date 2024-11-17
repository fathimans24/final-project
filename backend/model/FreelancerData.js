const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
        userId: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        desc: { type: String, required: true },
        totalStars: { type: Number, default: 0 },
        starNumber: { type: Number, default: 0 },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        cover: { type: String, required: true },
        image: { type: String, required: true },
        shortTitle: { type: String, required: true },
        shortDesc: { type: String, required: true }, 
        deliveryTime: { type: Number, required: true }, 
        revisionNum: { type: Number, required: true },
        features: { type: String, required: false },
    },
    {
        timestamps: true,
    });
    


module.exports = mongoose.model('Freelancer', freelancerSchema);
