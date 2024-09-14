const mongoose = require("mongoose");
// this is to connect to the database
function DbConnection(){
    const DB_URL = process.env.MONGO_URI;
    // this are some rules to be written recommended
    mongoose.connect(DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    // establishing the connection
    const db = mongoose.connection;
    // if error occurs while connecting
    db.on("error",console.error.bind(console,"Connecion Error"));
    // if it is connected once 
    db.once("open",function(){
        console.log("DB Connected !")
    })
}

module.exports = DbConnection;