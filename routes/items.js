const router = require("express").Router();
const items = require("../controllers/items");

router.get("/", items.getList);
router.get("/detail/:producto", items.getDetail);
router.post("/seed", items.seed);

module.exports = router;
