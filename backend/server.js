require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB error: ", error));

app.get("/", (req, res) => res.send("MERN E-commerce backend running"));

app.use("/api/menus", require("./routes/menuRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} running`));
