const CFF = require("../models/CFFModal");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// HANDLE A FILE UPLOAD
const handleFileUpload = async (req, res, next) => {
  const fileData = req.body.data;

  for (const order of fileData) {
    const [
      OrderNumber,
      OrderStatus,
      OrderDate,
      CustomerNote,
      OrderNote,
      FirstName,
      LastName,
      CompanyBilling,
      AddressBilling,
      City,
      State,
      ZipCode,
      Email,
      Phone,
      ShippingAddress,
      ShippingCity,
      ShippingState,
      ShippingZip,
      Item,
      SKU,
      ServiceType,
      Quantity,
      TotalItems,
      FormattedDedicatedFrom,
      FormattedDedicatedTo,
    ] = [
      order["Order Number"],
      order["Order Status"],
      order["Order Date"],
      order["Customer Note"],
      order["Order Notes"],
      order["First Name"],
      order["Last Name "],
      order["Company (Billing)"],
      order["Address 1 (Billing)"],
      order["City "],
      order["State "],
      order.Zip,
      order["Email "],
      order.Phone,
      order["Address 1 (Shipping)"],
      order["City (Shipping)"],
      order["State Code (Shipping)"],
      order["Zip (Shipping)"],
      order["Item #"],
      order.SKU,
      order.Name,
      order.Quantity,
      order["Total items"],
      order["Dedicated From"],
      order["Dedicated To | In Memory Of"],
    ];
    const DedicatedTo = FormattedDedicatedTo.match(
      /Flag\s*#\s*1\s*-\s*([\s\S]+)/
    )[1];
    const DedicatedFrom = FormattedDedicatedFrom.match(
      /Flag\s*#\s*1\s*-\s*([\s\S]+)/
    )[1];
    const result = await findCFFByOrderNumber(OrderNumber);

    if (!result) {
      for (let i = 0; i < Quantity; i++) {
        try {
          const cff = new CFF({
            OrderNumber,
            OrderStatus,
            OrderDate,
            CustomerNote,
            OrderNote,
            FirstName,
            LastName,
            CompanyBilling,
            AddressBilling,
            City,
            State,
            ZipCode,
            Email,
            Phone,
            ShippingAddress,
            ShippingCity,
            ShippingState,
            ShippingZip,
            Item,
            SKU,
            ServiceType,
            Quantity,
            TotalItems,
            DedicatedFrom,
            DedicatedTo,
          });
          cff.save();
        } catch (error) {
          success = false;
          console.log(error.message);
        }
      }
    }
  }

  res.json({ success: true });
};

// FINDING PREVIOUS CFF BY ORDER NUMBER
async function findCFFByOrderNumber(OrderNo) {
  try {
    const docs = await new Promise((resolve, reject) => {
      CFF.findOne({ OrderNumber: OrderNo }, function (err, docs) {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
    return docs;
  } catch (err) {
    console.log(err);
  }
}

// GETTING A CFF
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

// GETTING ALL CFF
const getAllCFF = async (req, res, next) => {
  let allCFF;
  try {
    allCFF = await CFF.find();
    res.status(200).json({ allCFF });
  } catch (err) {
    return next(err);
  }
};

// ADDING A CFF
const createCFF = async (req, res) => {
  const cff = new CFF({
    OrderNumber: req.body.orderNumber,
    OrderStatus: req.body.orderStatus,
    OrderDate: req.body.orderDate,
    CustomerNote: req.body.customerNotes,
    OrderNote: req.body.orderNote,
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    AddressBilling: req.body.billingAddress,
    City: req.body.billingCity,
    State: req.body.billingState,
    ZipCode: req.body.billingZipCode,
    Email: req.body.email,
    Phone: req.body.phone,
    ShippingAddress: req.body.shippingAddress,
    ShippingCity: req.body.ShippingCity,
    ShippingState: req.body.shippingState,
    ShippingZip: req.body.shippingZip,
    Item: req.body.item,
    SKU: req.body.sku,
    ServiceType: req.body.serviceType,
    Quantity: req.body.quantity,
    TotalItems: req.body.totalItems,
    DedicatedFrom: req.body.dedicatedFrom,
    DedicatedTo: req.body.dedicatedTo,
  });

  try {
    await cff.save();
  } catch (err) {
    console.log(err);
  }
  console.log(cff);
  return res.status(201).json({ cff });
};

// updating a CFF info
const updateCFF = async (req, res, next) => {
  const id = req.params.id;

  let cff;
  try {
    cff = await CFF.findById(id);
  } catch (err) {
    const error = err;
    return next(error);
  }
  (cff.OrderNumber = req.body.OrderNumber),
    (cff.OrderStatus = req.body.OrderStatus),
    (cff.OrderDate = req.body.OrderDate),
    (cff.CustomerNote = req.body.CustomerNote),
    (cff.OrderNote = req.body.OrderNote),
    (cff.FirstName = req.body.FirstName),
    (cff.LastName = req.body.LastName),
    (cff.AddressBilling = req.body.AddressBilling),
    (cff.City = req.body.City),
    (cff.State = req.body.State),
    (cff.ZipCode = req.body.ZipCode),
    (cff.Email = req.body.Email),
    (cff.Phone = req.body.Phone),
    (cff.ShippingAddress = req.body.ShippingAddress),
    (cff.ShippingState = req.body.ShippingState),
    (cff.ShippingZip = req.body.ShippingZip),
    (cff.Item = req.body.Item),
    (cff.SKU = req.body.SKU),
    (cff.ServiceType = req.body.ServiceType),
    (cff.Quantity = req.body.Quantity),
    (cff.TotalItems = req.body.TotalItems),
    (cff.DedicatedFrom = req.body.DedicatedFrom),
    (cff.DedicatedTo = req.body.DedicatedTo),
    console.log(cff);

  try {
    await cff.save();
  } catch (err) {
    return next(err);
  }

  res.status(200).json({ cff: cff.toObject({ getters: true }) });
};

// Deleting a CFF
const deleteCFF = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  let cff;
  try {
    cff = await CFF.findById(id);
    if (!cff) {
      return res.status(404).json({ message: "Item not found" });
    }
    await cff.remove();
  } catch (err) {
    return next(err);
  }

  res.status(204).send();
};

module.exports = {
  createCFF,
  getCFF,
  deleteCFF,
  updateCFF,
  handleFileUpload,
  getAllCFF,
};
