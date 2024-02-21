const Tracker = require("../models/TrackerModel");
const mongoose = require("mongoose")

const db = mongoose.connection;

const getTracker = async (req, res) => {
  try {
    const trackers = await Tracker.find({});   
    res.status(200).json(trackers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putTracker  = async (req,res) => {
  const { day, month }  = req.params;
  const monthArrayToChange = await Tracker.find(
    {"type":"meditation"}
  )  
  console.log(monthArrayToChange);
  console.log(monthArrayToChange.months)
  res.status(200).json();
  // const workout = await Workout.findOneAndUpdate({}, {
  //   ...req.body
  // })
     
}

module.exports = {
  getTracker,
  putTracker
};
