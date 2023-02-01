const express = require("express");

// requiring function calls from controllers
const { createCFF, getCFF } = require("../controllers/CffControllers");

const router = express.Router();

// route to create a CFF
router.post("/add", createCFF);

// route to get request
router.get("/", getCFF);

module.exports = router;
