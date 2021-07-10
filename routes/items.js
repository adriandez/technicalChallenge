const router = require("express").Router();
const items = require("../controllers/items");

router.get("/", items.getList);

module.exports = router;
