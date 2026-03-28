const router = require("express").Router();
const { getTechs } = require("../controllers/techs.controller");

router.get("/", getTechs);

module.exports = router;
