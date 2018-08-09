const router = require("express").Router();
const charController = require("../controller/charController");

router.get("/api/chars",charController.read);

module.exports = router;