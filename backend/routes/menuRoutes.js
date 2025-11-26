const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const menus = await Menu.find({ active: true });
  res.json(menus);
});

router.post("/", auth, async (req, res) => {
  const menu = new Menu(req.body);
  await menu.save();
  res.json(menu);
});

router.put("/:id", auth, async (req, res) => {
  const updated = await Menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

router.delete("/:id", auth, async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ message: "Menu deleted" });
});

module.exports = router;
