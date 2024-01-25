const watchlist = require("../models/watchlist");

exports.getWatchlist = async (req, res) => {
  try {
    const WatchlistData = await watchlist.find({});
    res.json({ success: true, data: WatchlistData });
  } 
  catch (error) 
  {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      status: 500,
      message: error.message,
    });
  }
};

exports.getWatchlistByName = async (req, res) => {
  try {
    // Extract the 'name' parameter from the request parameters
    const { name } = req.params;

    // Define a filter object based on the name parameter
    const filter = {};
    if (name) {
      filter.name = { $regex: new RegExp(name, 'i') };
    }

    // Fetch watchlist items based on the filter
    const Watchlist = await watchlist.find(filter);

    // Check if any data is found
    if (Watchlist.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No data found with the name: ${name}`,
      });
    }

    // Data for the given name found
    res.status(200).json({
      success: true,
      data: Watchlist,
      message: `${name} data successfully fetched`,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: 'Server Error',
    });
  }
};

exports.getWatchlistByGenre = async (req, res) => {
  try {
    // Extract the 'genre' parameter from the request parameters
    const { genre } = req.params;

    // Define a filter object based on the genre parameter
    const filter = {};
    if (genre) {
      filter.genre = genre;
    }

    // Fetch watchlist items based on the filter
    const Watchlist = await watchlist.find(filter);

    // Check if any data is found
    if (Watchlist.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No data found for the genre: ${genre}`,
      });
    }

    // Data for the given genre found
    res.status(200).json({
      success: true,
      data: Watchlist,
      message: `Titles for the genre ${genre} successfully fetched`,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: 'Server Error',
    });
  }
};