const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require('cors')
const connectDatabase = require("./config/connectDatabase");
dotenv.config();
connectDatabase();
app.use(express.json());
app.use(cors());
const products = require("./routes/product");
const orders = require("./routes/order");
app.use("/api/v1/", products);
app.use("/api/v1/", orders);
app.listen(process.env.PORT, () => {
  console.log(
    `Server is listerning to port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
