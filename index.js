const express=require("express");
require("dotenv").config();
const watchlistRoutes = require("./routes/watchlist");
const dbConnect=require("./config/database")


const app=express();

const PORT=process.env.PORT || 4000;

app.use(express.json());

app.use("",watchlistRoutes);

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
})

dbConnect();

app.get("/",(req,res)=>{
    res.send("<h1> This is Homepage.</h1>");
})
