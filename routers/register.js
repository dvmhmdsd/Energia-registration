const router = require("express").Router();

// get the member model
const Member = require("../models/member");

router.post("/", (req, res) => {
  // extract the fields' value from the request bod
  let {
    fname,
    lname,
    email,
    phone,
    university,
    college,
    committee,
    reason
  } = req.body;

  // make inistance from the member model
  let member = new Member({ fname,
    lname,
    email,
    phone,
    university,
    college,
    committee,
    reason });

  // save to database
  member.save().then(response => {
    res.sendStatus(200);
  });

});

// export the router
module.exports = router;
