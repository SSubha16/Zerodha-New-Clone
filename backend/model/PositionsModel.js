// const { model } = require("mongoose");
const { model } = require("mongoose");
const { PositionsSchema } = require("../schema/PositionsSchema");

// const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };