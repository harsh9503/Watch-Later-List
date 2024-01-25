const mongoose=require("mongoose");

require("dotenv");

const dbConnect= () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(()=>console.log("DB CONNECTED SUCCESSFULLY"))
        .catch((err)=>{
            console.log("DB CONNECTION ISSUE")
            console.error(err.message);
            process.exit(1);
        });
};

module.exports=dbConnect;
