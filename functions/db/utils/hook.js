const mongoose = require('mongoose');

const git = new mongoose.Schema({
    repository: {
        type: String,
        required: true
    },
    commit: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Git', git);