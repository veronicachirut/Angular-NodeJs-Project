var express = require('express');
var router = express.Router();
const movieController = require("../controllers/movieController")

router.get("/movies", movieController.getAllMoviesAPI);
router.get("/moviedetails/:movie", movieController.getMovieDetails);

module.exports = router;
