const express = require("express");
const { dataFetch } = require("../controllers/data_fetcher");
const router = express.Router();

router.post("/fetchData", dataFetch);

module.exports = router;