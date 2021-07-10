
const Item = require("../models/Item");

const routes = {
  getList: (req, res) => {
    res.status(200).send("Say hello to my little friend!!");
  },
};

module.exports = routes;
