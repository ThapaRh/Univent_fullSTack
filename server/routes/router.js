const express = require("express");

// requiring function calls from controllers
const {
  createCFF,
  getCFF,
  deleteCFF,
  updateCFF,
} = require("../controllers/CffControllers");

const router = express.Router();

// route to create a CFF
router.post("/add", createCFF);

// route to get a CFF
router.get("/:id", getCFF);

// route to delete a CFF
router.delete("/:id", deleteCFF);

//route to update CFF info
router.patch("/:id", updateCFF);

module.exports = router;
