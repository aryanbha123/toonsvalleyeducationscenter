const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    type: {
        type: String,
        required: true,
        enum: ['Students', 'Classroom', 'Outing', 'Staff' , 'Others'], // Define the allowed types here
    },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
