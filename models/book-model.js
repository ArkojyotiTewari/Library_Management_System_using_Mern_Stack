const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating on collections

const bookSchema = new Schema({
    // infos needed
    name:{
        // infos needed for the name
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    price:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    }
},{
    // here I want the timestamp of each entry of the table
    timestamps: true,
})

module.exports = mongoose.model("Book",bookSchema);