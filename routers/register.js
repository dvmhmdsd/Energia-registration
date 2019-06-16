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
  let member = new Member({ fname });

  // save to database
  member.save().then(res => {
    console.log("sent", res);
  });

  console.log(req.body)
});

// export the router
module.exports = router;
