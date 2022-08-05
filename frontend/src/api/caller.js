import API from "./constant";

export const getUrlData = async (link) => {
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

export const wakeUpCaller = () => {
  fetch(`${API.BASE_URL}/${API.WAKE_UP}`, {
    method: "GET",
  });
};
