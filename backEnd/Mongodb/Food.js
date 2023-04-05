const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const foodSchema = new mongoose.Schema({
  img: String,
  name: String,
    dsc: String,
    price:Number,
    rate:Number,
    
  });
  
const Food = mongoose.model("Food", foodSchema);

module.exports = Food;