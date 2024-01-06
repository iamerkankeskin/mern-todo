const Item = require("../models/item");

const getItems = async (req, res) => {
  try {
    const { id } = req.params;
    const items = await Item.find({ list: id });
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const checkItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { checked } = req.body;

    const item = await Item.findByIdAndUpdate(id, { checked }, { new: true });

    if (!item) {
      res.status(404).json({ message: `Cannot find any item with ID ${id}` });
    }

    const checkedItem = await Item.findById(id);

    res.status(200).json(checkedItem);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await Item.findByIdAndDelete(id);
    return res.status(204).json(list);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    return res.status(201).json(item);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getItems,
  checkItem,
  deleteItem,
  createItem
};
