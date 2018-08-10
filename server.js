const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

require("./models/Char");

mongoose.Promise = global.Promise;
//MongoConnect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/movingtiles")
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require('./routes/chars'));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//Server Setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});