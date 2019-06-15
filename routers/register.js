const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("reg");
});

// export the router
module.exports = router;
