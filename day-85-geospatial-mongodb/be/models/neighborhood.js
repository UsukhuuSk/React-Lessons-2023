const mongoose = require("mongoose");

const neighborhoodSchema = new mongoose.Schema(
  {
    geometry: {
      type: String,
      enum: ["Polygon"],
      required: true,
    },
    name: String,
  },
  {
    collection: "neighborhoods",
  }
);
const Neighborhoods = mongoose.model("Neighborhoods", neighborhoodSchema);

module.exports = Neighborhoods;
