const { model } = require("mongoose");
const { HoldingsSchema } = require("../schema/HoldingsSchema");

// const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };