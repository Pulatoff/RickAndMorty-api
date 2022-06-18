const showModel = require("../model/showModel");
const APIFeatures = require("../helper/APIFeatures");

const getAllShow = async (req, res) => {
  try {
    let data = new APIFeatures(showModel, req.query)
      .filter()
      .pagination()
      .field()
      .sort();

    const datas = await data.surov;
    res.status(200).json(datas);
  } catch (e) {
    erorFunc(req, res, e);
  }
};

const addShow = async (req, res) => {
  try {
    const data = await showModel.create(req.body);
    res.status(201).json({
      status: "success",
    });
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const getShow = async (req, res) => {
  try {
    const data = await showModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const updateShow = async (req, res) => {
  try {
    const data = await showModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const deleteShow = async (req, res) => {
  try {
    const data = await showModel.findByIdAndDelete(req.params.id);
  } catch (e) {
    erorFunc(req, res, e);
  }
};

function erorFunc(req, res, e) {
  res.status(404).json({
    status: "not found",
    message: e.message,
  });
}

module.exports = { getAllShow, getShow, addShow, deleteShow, updateShow };
