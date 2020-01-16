const mongosse = require('mongoose');

const PointSchema = new mongosse.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    }
})