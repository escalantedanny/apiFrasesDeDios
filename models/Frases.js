const mongoose = require('mongoose');

const FrasesSchema = mongoose.Schema({
    quote: {
        type: String
    },
    author: {
        type: String
    }
});

module.exports = mongoose.model('Frases', FrasesSchema);