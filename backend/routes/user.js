const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Noa" },
    { id: 3, name: "Lucia" },
    { id: 4, name: "Lucas" },
    { id: 5, name: "Avraham" },
    { id: 6, name: "Lucy" },
    { id: 7, name: "Bill" },
    { id: 8, name: "Mike" },
  ];

  res.json({ users, msg: "Fetched users" });
});

module.exports = router;
