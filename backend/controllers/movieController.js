const movieModel = require("../models/movieModel");

exports.getAllMoviesAPI = async function (req, res) {
    try {
        const allMovies = await movieModel.getAllMovies();

        res.status(200).json({allMovies});
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getMovieDetails = async function (req, res) {
    try {
      const currentMovie = await movieModel.getMovieById(req.params.movie);
      const relatedMovies = await movieModel.getRelatedMovies(currentMovie.year);

      console.log(currentMovie._id);

      let noCurrentMovieList = relatedMovies.filter( el => el.title !== currentMovie.title );

      console.log(currentMovie.year);
      console.log(noCurrentMovieList);
      res.status(200).json({ currentMovie, noCurrentMovieList });
    } catch (err) {
      res.status(500).json(err);
    }
  };
