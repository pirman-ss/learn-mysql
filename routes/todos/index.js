const express = require("express");
const router = express.Router();

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addData);
router.put("/:id", require("./controller").updateOne);

module.exports = router;