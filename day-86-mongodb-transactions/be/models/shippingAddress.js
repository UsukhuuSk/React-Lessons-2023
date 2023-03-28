const mongoose = require("mongoose");

const address = new mongoose.model(
  "address",
  new mongoose.Schema({
    address: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  })
);

module.exports = address;
