const mongoose = require('mongoose');

const taskPratical = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Pratical', taskPratical);
 