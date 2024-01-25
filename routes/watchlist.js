const express = require("express");

const router = express.Router();

const {createwatchlist}=require("../controller/createWatchlist");
const {getWatchlist, getWatchlistByName, getWatchlistByGenre}=require("../controller/getWatchlist");
const {updatewatchlist}=require("../controller/updateWatchlist");
const {deletewatchlist}=require("../controller/deleteWatchlist");

router.post("/createwatchlist",createwatchlist);
router.get("/getwatchlist",getWatchlist);
router.get("/getwatchlistbyname/:name",getWatchlistByName);
router.put("/updatewatchlist",updatewatchlist);
router.delete("/deletewatchlist/:id",deletewatchlist);
router.get("/getwatchlistbygenre/:genre", getWatchlistByGenre);


module.exports=router;