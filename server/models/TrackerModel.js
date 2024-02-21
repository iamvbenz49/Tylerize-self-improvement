const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const MonthSchema = new Schema({
    month:{
        type:Number,
        required:true
    },
    days:{
        type:[Number],
        required:true
    }
});

const TrackerSchema = new Schema({
    type:{
        type:String,
        required:true
    },
    months:{
        type:[MonthSchema],
        required:true
    }
});



module.exports = mongoose.model("Tracker",TrackerSchema);