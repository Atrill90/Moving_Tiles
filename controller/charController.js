const mongoose = require("mongoose");
const Chars = mongoose.model('Chars');

module.exports = {
    read: function(req, res) {
        Chars
        .find({})
        .sort({ id: 1 })
        .then(chars => res.json(chars))
        .catch(err => res.status(422).json(err));
    }
}

