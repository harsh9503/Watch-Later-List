const mongoose = require("mongoose");

const watchlistSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    platform:{
        type:String,
        enum: ['Amazoneprime','Netflix','Youtube','Hotstar','Jiocinema','Sonyliv'],
        required:true,
    },
    genre:{
        type:String,
        enum: ['Comedy','Horror','Action','Adventure','Drama','Crime','Scifi','Thriller','Romance','Mystery'],
        required:true,
    },
    link:{
        type: String,
        required:true,
    },
    whatILearnt: {
        type: String,
    },
    status: {
        type: String,
        enum: ['watched', 'pending'],
        default: 'pending',
    },
});

module.exports= mongoose.model("watchlist",watchlistSchema);