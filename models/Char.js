const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charSchema = new Schema({
    id: { type: Number, required: false},
    charName: { type: String, required: false},
    image: { type: String, required: false},
},
{ collection : 'Chars' });
  
let Chars = mongoose.model("Chars", charSchema);
module.exports = Chars;