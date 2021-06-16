const router = require("express").Router();
let Order = require("../models/order.model");

router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const qty = Number(req.body.qty);

  const newOrder = new Order({ title, description, qty });

  newOrder
    .save()
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Order.findById(req.params.id)
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").post((req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      order.title = req.body.title;
      order.description = req.body.description;
      order.qty = Number(req.body.qty);

      order
        .save()
        .then((order) => res.json(order))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
