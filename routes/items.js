const router = require("express").Router();
const items = require("../controllers/items");

router.get("/", items.getList);
router.get("/detail/:cif", items.getDetail);
router.get("/filter/:name", items.getManuItems);
router.post("/seed", items.seed);

module.exports = router;
