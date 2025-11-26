const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [
    {
      label: String,
      url: String,
      order: String,
    },
  ],
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Menu", menuSchema);
