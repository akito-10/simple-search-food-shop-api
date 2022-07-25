const fetch = require("node-fetch");

module.exports = {
  findAll: async ({ range, card, midnight, lat, lng }) => {
    return await fetch(
      `http://webservice.recruit.co.jp/hotpepper/gourmet/v1?key=${process.env.HOTPEPPER_API_KEY}&format=json&count=10&range=${range}&card=${card}&midnight=${midnight}&lat=${lat}&lng=${lng}`
    );
  },
};
