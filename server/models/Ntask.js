const mongoose = require('mongoose');

const NtaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('NTask', NtaskSchema);
 