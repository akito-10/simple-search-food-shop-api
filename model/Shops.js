const { default: axios } = require("axios");

module.exports = {
  findAll: async ({ range, card = 0, midnight = 0, lat, lng }) => {
    return await axios.get(
      "http://webservice.recruit.co.jp/hotpepper/gourmet/v1",
      {
        headers: { "Content-type": "application/json" },
        params: {
          key: process.env.HOTPEPPER_API_KEY,
          range: range,
          card: card,
          midnight: midnight,
          lat: lat,
          lng: lng,
        },
      }
    );
  },
};
