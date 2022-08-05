require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// ** My Routes
const dataFetcherApi = require("./routes/data_fetcher");
const instantApi = require("./routes/wake_up");


// ** Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// ** My Routes
app.use("/api", dataFetcherApi);
app.use("/api", instantApi);

// ** Listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`listening on *${PORT}`);
})