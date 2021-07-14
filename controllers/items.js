const { manufact, item } = require("../utils/database");
const { manufacts, items } = require("../models/seed");

const routes = {
  getList: async (req, res) => {
    const response = await item.findAll();
    console.log(response);
    res.status(200).json(response);
  },
  getDetail: async (req, res) => {
    console.log(req.params);
  },
  seed: (req, res) => {
    manufacts.forEach((manuf) => {
      manufact
        .create(manuf)
        .then((newManufact) => {
          console.log(newManufact);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    items.forEach((ite) => {
      item
        .create(ite)
        .then((newItem) => {
          console.log(newItem);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};

module.exports = routes;
