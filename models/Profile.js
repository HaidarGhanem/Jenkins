const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Add Name'],
        trim: true,
        maxLength: [50, 'Name can not be more 50 chars']
    },
    address: {
        type: String,
        required: [true, 'Please Add Address'],
        maxLength: [100, 'Address can not be more than 100 chars']
    },
    imageURL: {
        type: String,
        default: 'no-photo.png'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Profile', ProfileSchema, 'profiles')