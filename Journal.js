const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    title: String,
    content: String,
}, { timestamps: true });

module.exports = mongoose.model('Journal', journalSchema);