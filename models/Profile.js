const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'profile'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    firstname: {
        type: String,
        // required: true
    },
    lastname: {
        type: String,
        // required: true
    },
    street: {
        type: String,
        // required: true
    },
    unit: {
        type: String,
    },
    city: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    zip: {
        type: String,
        // required: true
    } 
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);