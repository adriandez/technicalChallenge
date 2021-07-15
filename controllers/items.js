const { manufact, item } = require("../utils/database");
const { manufacts, items } = require("../models/seed");

const routes = {
  getList: async (req, res) => {
    try {
      const response = await item.findAll();
      console.log(response);
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
    }
  },
  getDetail: async (req, res) => {
    try {
      const response = await manufact.findOne({ where: req.params });
      console.log(response);
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
    }
  },
  getManuItems: async (req, res) => {
    try {
      const response = await manufact.findOne({ where: req.params });
      const response2 = await item.findAll({ where: { cif: response.cif } });
      res.status(200).json(response2);
    } catch (err) {
      console.log(err);
    }
  },
  seed: (req, res) => {
    try {
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
      res.status(200).json({ message: "Thank you for seeding MySQL DB" });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = routes;
