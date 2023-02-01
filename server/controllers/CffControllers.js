const CFF = require("../models/CFFModal");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// adding a CFF
const createCFF = async (req, res) => {
  const cff = new CFF({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    AddressBilling: req.body.AddressBilling,
    City: req.body.City,
    State: req.body.State,
    Date: req.body.Date,
    Gender: req.body.Gender,
    Client_name: req.body.Client_name,
  });
  try {
    await cff.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }

  return res.status(201).json({ cff });
};

const update = () => {};

const getCFF = async (req, res) => {
  res.send("<h1>Hello World</h1>");
};

module.exports = {
  createCFF,
  getCFF,
};
