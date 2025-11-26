const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  link: { type: String },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Banner", bannerSchema);
