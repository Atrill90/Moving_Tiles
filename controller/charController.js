const mongoose = require("mongoose");
const Chars = mongoose.model('Chars');


module.exports = {
    read: function(req, res) {
        Chars
        .find({})
        .sort({ id: 1 })
        .then(chars => console.log(chars))
        .catch(err => res.status(422).json(err));
    }
}

// console.log(chars)
// res.json(chars))