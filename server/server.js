require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


//const routes = require("./routes/routes")
const app = express();

app.use(express.json());
app.use(cors());

//app.use("/",routes);

mongoose.connect(process.env.MONGO_URI|| 5000)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server started and now listening",process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error);
    })
module.exports = app;