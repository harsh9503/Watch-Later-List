const watchlist = require("../models/watchlist");
const validator = require('validator');

exports.createwatchlist= async (req,res)=>{

    try{
        const{ name, platform, genre, link}=req.body;

        if( !name || !platform || !genre || !link)
        {
            return res.status(400).json({
                status:400,
                message:"Please fill all fields",
            });
        }
        // Validate link format using validator library
        if (!validator.isURL(link)) {
          return res.status(400).json({
            success: false,
            message: 'Invalid link format.',
             });
         }
  
        const Watchlist= await watchlist.create({
            name,
            platform,
            genre,
            link,
        });
        return res.status(200).json({
            status:200,
            message:"Data added in Watchlist",
            data:Watchlist,
        });
    }
    catch (error) {
        console.log("error", error);
        return res.status(500).json({
          status: 500,
          message: error.message,
        });
      }
};