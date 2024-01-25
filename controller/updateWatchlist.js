const watchlist = require("../models/watchlist");

exports.updatewatchlist = async (req, res) => {
  try {
    // Assuming you can identify the item based on its name
    const { name, platform, genre, link,whatILearnt, status } = req.body;

    // Find the item by name and update
    const updatedItem = await watchlist.findOneAndUpdate(
      { name: name },
      { platform, genre, link ,whatILearnt, status},
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: 'Watchlist item not found.',
      });
    }

    res.status(200).json({
      success: true,
      data: updatedItem,
      message: 'Watchlist item updated successfully.',
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
