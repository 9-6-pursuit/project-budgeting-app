const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// SHOW
transactions.get("/transactions/:id", (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    res.json(transactionsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE
transactions.post("/transactions", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

// DELETE
transactions.delete("/transactions/:id", (req, res) => {
  if (transactionsArray[req.params.indexArray]) {
    const deletedBookMark = transactionsArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedBookMark);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});
module.exports = transactions;

// UPDATE
transactions.put("/transactions/:id", (req, res) => {
    if (transactionsArray[req.params.arrayIndex]) {
      transactionsArray[req.params.arrayIndex] = req.body;
      res.status(200).json(transactionsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
  