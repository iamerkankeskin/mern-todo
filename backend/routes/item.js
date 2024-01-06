const express = require("express");

const {
  getItems,
  checkItem,
  deleteItem,
  createItem,
} = require("../controllers/item");

const router = express.Router();

router.get("/list/:id/items", getItems);
router.patch("/item/:id/checked", checkItem);
router.delete("/item/:id", deleteItem);
router.post("/item", createItem);

module.exports = router;
