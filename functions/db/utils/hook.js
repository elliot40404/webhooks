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
    private: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: String,
        default: new Date().toDateString() + ' ' + new Date().toLocaleTimeString()
    }
},{ collection: 'git' });

module.exports = mongoose.model('Git', git);