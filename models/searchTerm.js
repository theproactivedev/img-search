var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var searchTermSchema = new Schema({
  searchTerm : String,
  searchDate : Date 
}, {
  timestamp: true
});

var ModelClass = mongoose.model("searchTerms", searchTermSchema);

module.exports = ModelClass;