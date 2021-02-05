const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    imgpath: {type: String, required: true},
    trailer: {type: String, required: true},
    genre: {type: String, required: true},
    time: {type: String, required: true},
    producer: {type: String, required: true},
    actorslist: {type: String, required: true},
    description: {type: String, required: true}
});

const movie = mongoose.model("movie", MovieSchema);

exports.getAllMovies = function () {
    return new Promise((resolve, reject) => {
        movie.find().exec(function (err, movies) {
          if (err) {
            reject({ err });
          } else {
            resolve(movies);
          }
        });
      });
}

exports.getMovieById = function (id) {
  return new Promise((resolve, reject) => {
    movie.findOne({ _id: id }).exec(function (err, movie) {
      if (err) {
        reject({ err });
      } else {
        // console.log(movie);
        resolve(movie);
      }
    });
  });
};

exports.getRelatedMovies = function (year) {
  return new Promise((resolve, reject) => {
    movie.find({ year: year }).exec(function (err, movie) {
      if (err) {
        reject({ err });
      } else {
        // console.log(movie);
        resolve(movie);
      }
    });
  });
};


exports.Movie = movie;