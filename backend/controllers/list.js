const List = require("../models/list");

const getLists = async (req, res) => {
  try {
    const lists = await List.find({});
    return res.status(200).json(lists);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createList = async (req, res) => {
  try {
    const list = await List.create(req.body);
    return res.status(201).json(list);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getList = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await List.findById(id);
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    await List.findByIdAndDelete(id);
    await Item.deleteOne({ list: id });
    return res.status(204).json({});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateList = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await List.findByIdAndUpdate(id, req.body);

    if (!list) {
      res.status(404).json({ message: `Cannot find any list with ID ${id}` });
    }

    const updatedList = await List.findById(id);

    res.status(200).json(updatedList);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLists,
  createList,
  getList,
  deleteList,
  updateList
};
