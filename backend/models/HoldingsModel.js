const mongoose = require("mongoose");
const model = mongoose.model;

const { HoldingSchema } = require("../schemas/HoldingSchema");

const HoldingsModel = new model("holding", HoldingSchema);

module.exports = { HoldingsModel };
