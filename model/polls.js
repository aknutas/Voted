var mongoose = require('mongoose');

var pollSchema = new mongoose.Schema({
    name: String,
    description: String,
    adm: String,
    shortlink: String,
    pollcreated: Date,
    polloptions: [{ name: String, votes: Number }]
});

module.exports = mongoose.model('Poll', pollSchema);
