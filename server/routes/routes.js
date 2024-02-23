const express = require("express");
const router = express.Router();
const {
    getTracker,
    putTracker
} = require("../controllers/meditationController");



router.get("/meditation",getTracker);

router.put("/meditation", putTracker);

router.get("/workouts",getTracker);
module.exports = router;