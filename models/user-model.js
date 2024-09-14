const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating on collections

const userSchema = new Schema({
    // id will be automatically taken care by the database
    // infos needed
    name:{
        // infos needed for the name
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    // issuedBook will be a foreign key right
    issuedBook:{
        type: mongoose.Schema.Types.ObjectId,
        // referrenced table
        ref:"Book",
        required:false
    },
    returnDate:{
        type:String,
        required:false
    },
    subscriptionType:{
        type:String,
        required:true
    },
    subscriptionDate:{
        type:String,
        required:true
    }
},{
    // here I want the timestamp of each entry of the table
    timestamps: true,
})

module.exports = mongoose.model("User",userSchema);