const CFF = require("../models/CFFModal");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// getting a cff info using id
const getCFF = async (req, res, next) => {
  const id = req.params.id;

  let cff;
  try {
    cff = await CFF.findById(id);
  } catch (err) {
    return next(err);
  }

  res.status(200).json({ cff: cff.toObject({ getters: true }) });
};

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
    return next(err);
  }

  return res.status(201).json({ cff });
};

// updating a CFF info
const updateCFF = async (req, res, next) => {
  const {
    FirstName,
    LastName,
    AddressBilling,
    City,
    State,
    Client_name,
    Date,
    Gender,
  } = req.body;
  const id = req.params.id;

  let cff;
  try {
    cff = await CFF.findById(id);
  } catch (err) {
    const error = err;
    return next(error);
  }

  cff.FirstName = FirstName;
  cff.LastName = LastName;
  cff.AddressBilling = AddressBilling;
  cff.City = City;
  cff.State = State;
  cff.Client_name = Client_name;
  cff.Date = Date;
  cff.Gender = Gender;

  try {
    await cff.save();
  } catch (err) {
    return next(err);
  }

  res.status(200).json({ cff: cff.toObject({ getters: true }) });
};

// deleting a cff using id
const deleteCFF = async (req, res, next) => {
  const id = req.params.id;
  let cff;
  try {
    cff = await CFF.findById(id);
  } catch (err) {
    return next(err);
  }

  try {
    await cff.remove();
  } catch (err) {
    return next(err);
  }

  res.status(200).json({ message: "Deleted Cff." });
};

module.exports = {
  createCFF,
  getCFF,
  deleteCFF,
  updateCFF,
};
