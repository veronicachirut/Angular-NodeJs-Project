const userModel = require("../models/userModel");

exports.registerAPI = async function (req, res) {
  try {
    const response = await userModel.register(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loginAPI = function (req, res) {
  userModel
    .login(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.getAllUsersAPI = async function (req, res) {
  try {
    const allUsers = await userModel.getAllUsers();
    const loggedUser = await userModel.getUserById(req.userData._id);

    res.status(200).json({ allUsers, loggedUser });
  } catch (err) {
    res.status(500).json(err);
  }
};
