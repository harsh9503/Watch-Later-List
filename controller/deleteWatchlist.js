const watchlist = require("../models/watchlist");
const mongoose = require("mongoose");

exports.deletewatchlist = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided ID is valid
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID provided.',
      });
    }

    // Find the watchlist item by ID and delete it
    const deletedItem = await watchlist.findByIdAndDelete(id);

    // Check if the watchlist item was found and deleted
    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: 'Watchlist item not found.',
      });
    }

    res.status(200).json({
      success: true,
      data: deletedItem,
      message: 'Watchlist item deleted successfully.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: 'Server Error',
    });
  }
};
