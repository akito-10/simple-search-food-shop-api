const Shops = require("../model/Shops");

module.exports = {
  getShops: async (req, res) => {
    const storedShops = Shops.findAll(req.params);

    res.status(200).json(storedShops);
  },
};
