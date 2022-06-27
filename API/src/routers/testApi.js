const express = require("express");
const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/", function(req, res, next) {
    res.send("Api is working")
})

module.exports = router;
