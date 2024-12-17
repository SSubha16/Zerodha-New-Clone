const { model } = require("mongoose");
const { OrdersSchema } = require("../schema/OrdersSchema");

// const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };