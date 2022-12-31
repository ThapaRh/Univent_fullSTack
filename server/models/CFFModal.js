const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CFFSchema = new Schema(
  {
    UniqueOrderNoDate: {
      type: String,
      index: { unique: true, dropDups: true },
      required: true,
    },
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

    FlagDelivered: {
      type: Boolean,
    },

    OrderNumber: {
      type: Number,
      required: false,
    },
    OrderStatus: {
      type: String,
      required: false,
    },
    OrderDate: {
      type: String,
      required: false,
    },
    CustomerNote: {
      type: String,
      required: false,
    },
    OrderNotes: {
      type: String,
      required: false,
    },
    FirstName: {
      type: String,
      required: false,
    },
    LastName: {
      type: String,
      required: false,
    },
    CompanyBilling: {
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
    Zip: {
      type: Number,
      required: false,
    },
    Email: {
      type: String,
      required: false,
    },
    Phone: {
      type: Number,
      required: false,
    },
    AddressShipping: {
      type: String,
      required: false,
    },
    CityShipping: {
      type: String,
      required: false,
    },
    StateShipping: {
      type: String,
      required: false,
    },
    ZipShipping: {
      type: Number,
      required: false,
    },
    ItemNumber: {
      type: Number,
      required: false,
    },
    SKU: {
      type: String,
      required: false,
    },
    Name: {
      type: String,
      required: false,
    },
    Quantity: {
      type: Number,
      required: false,
    },
    ItemCost: {
      type: Number,
      required: false,
    },
    PaymentMethod: {
      type: String,
      required: false,
    },
    Total: {
      type: Number,
      required: false,
    },
    Totalitems: {
      type: Number,
      required: false,
    },
    DedicatedFrom: {
      type: String,
      required: false,
    },
    DedicatedTo: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CFF", CFFSchema);
