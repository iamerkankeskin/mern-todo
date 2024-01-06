const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const listRoute = require("./routes/list");
const itemRoute = require("./routes/item");

require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", listRoute);
app.use("/api", itemRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API Runned on ${PORT} port..`);
    });
  })
  .catch((error) => {
    console.log("ERROR =>", error);
  });
