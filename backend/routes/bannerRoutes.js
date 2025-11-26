const express = require("express");
const router = express.Router();
const Banner = require("../models/Banner");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const banners = await Banner.find({ active: true }).sort({ order: 1 });
  res.json(banners);
});

router.post("/", auth, async (req, res) => {
  const b = new Banner(req.body);
  await b.save();
  res.json(b);
});

router.put("/:id", auth, async (req, res) => {
  const b = await Banner.findByIdAndUpdate(req.params.id, res.body, {
    new: true,
  });
  res.json(b);
});

router.delete("/:id", auth, async (req, res) => {
  await Banner.findByIdAndDelete(req.params.id);
  res.json({ message: "delete" });
});

module.exports = router;
