const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;
var JWT = require("./../middleware/jwt");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  hashed_password: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

const user = mongoose.model("user", UserSchema);

function hashPW(pw) {
  return crypto.createHash("sha256").update(pw).digest("base64").toString();
}

exports.register = function (userReq) {
  let newUser = new user();

  newUser.set("email", userReq.email);
  newUser.set("name", userReq.name);
  newUser.set("hashed_password", hashPW(userReq.password));

  return new Promise((resolve, reject) => {
    newUser.save(function (err, insertedUser) {
      if (err) {
        reject({ err });
      } else {
        resolve({ user: insertedUser });
      }
    });
  });
};

exports.login = function (userReq) {
  return new Promise((resolve, reject) => {
    user.findOne({ email: userReq.email }).exec(function (err, user) {
      if (err) {
        reject({ err });
      }

      if (!user) {
        reject({ message: "User not found" });
      } else {
        if (user.hashed_password === hashPW(userReq.password.toString())) {
          const token = JWT.getToken({
            email: user.email,
            _id: user._id,
          });
          resolve({ user, token });
        } else {
          reject({ message: "Wrong password" });
        }
      }
    });
  });
};

exports.getAllUsers = function () {
  return new Promise((resolve, reject) => {
    user.find().exec(function (err, users) {
      if (err) {
        reject({ err });
      } else {
        resolve(users);
      }
    });
  });
};

exports.getUserById = function (id) {
  return new Promise((resolve, reject) => {
    user.findOne({ _id: id }).exec(function (err, user) {
      if (err) {
        reject({ err });
      } else {
        resolve(user);
      }
    });
  });
};

exports.User = user;