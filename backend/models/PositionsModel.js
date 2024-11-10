const mongoose = require("mongoose");
const model = mongoose.model;

const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
