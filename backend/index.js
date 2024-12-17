require('dotenv').config();

const express = require("express");
const app = express();

const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080 ;
const uri = process.env.MONGO_URL;


const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser');
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');





app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});



app.listen(PORT , () => {
    console.log("APP STARTED");
    mongoose.connect(uri);
    console.log("DB is connected");
    
});