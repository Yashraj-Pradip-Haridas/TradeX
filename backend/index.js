require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL;
// const { HoldingsModel } = require("./models/HoldingsModel");
// const { PositionsModel } = require("./models/PositionsModel");
// Instead of using the below u also can use the following code only
// mongoose.connect(url)  This much is also enough
mongoose.connect(url).then(() => {
  console.log("Successfully connected to the  database");
});

// app.get("/addHoldings", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((holding) => {
//     let data = new PositionsModel({
//       product: holding.product,
//       name: holding.name,
//       qty: holding.qty,
//       avg: holding.avg,
//       price: holding.price,
//       net: holding.net,
//       day: holding.day,
//       isLoss: holding.isLoss,
//     });
//     data.save();
//   });
//   res.send("Done");
// });

app.listen(PORT, () => {
  console.log("Server is running at port 3000");
});
