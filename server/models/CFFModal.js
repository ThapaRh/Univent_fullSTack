const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CFFSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: false,
    },
    LastName: {
      type: String,
      required: false,
    },
    AddressBilling: {
      type: String,
      required: false,
    },
    City: {
      type: String,
      required: false,
    },
    State: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CFF", CFFSchema);
