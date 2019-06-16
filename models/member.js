const mongoose = require("mongoose");

// set the schema
let MemberSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  university: String,
  college: String,
  committee: String,
  reason: String,
});

let Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
