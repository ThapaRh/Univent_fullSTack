const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FlagSchema = new Schema({
  Field: {
    type: String,
    required: true,
  },
  Row: {
    type: String,
    required: true,
  },
  Flag: {
    type: Number,
    required: true,
  },
  Occupied: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("FlagSchema", FlagSchema);
