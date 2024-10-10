const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    documentLink: {
        type: String, // This will store the URL or path of the uploaded PDF file
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
