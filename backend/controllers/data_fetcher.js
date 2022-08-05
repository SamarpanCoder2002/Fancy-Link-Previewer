const ogs = require("open-graph-scraper");

exports.dataFetch = (req, res) => {
  const { incomingUrl } = req.body;

  if (!incomingUrl) {
    return res.status(404).json({
      status: false,
      message: "Incoming url not found",
    });
  }

  const options = { url: incomingUrl };
  ogs(options, (error, results, response) => {
    console.log(error);
    console.log(results);
    console.log(response);

    if (error) {
      return res.status(400).json({
        status: false,
        message: "Internal Problem",
      });
    }

    res.status(200).json({
      status: true,
      data: results,
    });
  });
};
