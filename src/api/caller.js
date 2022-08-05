const API = require("./constant");

exports.getUrlData = async (link) => {
  const res = await fetch(`${API.BASE_URL}/${API.GET_DATA}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      incomingUrl: link,
    }),
  });

  return await res.json();
};

exports.wakeUpCaller = () => {
  fetch(`${API.BASE_URL}/${API.WAKE_UP}`, {
    method: "GET",
  });
};
