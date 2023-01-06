const CFF = require("../models/CFFModal");
const mongoose = require("mongoose");

// adding a CFF
const createCFF = async (req, res) => {
  CFF.create(req.body, function (err, cff) {
    if (err) {
      res.send("error creating a CFF");
    } else {
      console.log(cff);
      res.send(book);
    }
  });
};

const getCFF = async (req, res) => {
  res.send("<h1>Hello World</h1>");
};

module.exports = {
  createCFF,
  getCFF,
};
