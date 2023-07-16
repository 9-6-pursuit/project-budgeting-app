const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

// INDEX
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// SHOW
transactions.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const transaction = transactionsArray.find(
    (transaction) => transaction.id === id
  );

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE
transactions.post("/", (req, res) => {
  const newTransaction = req.body;
  newTransaction.id = transactionsArray.length + 1; // Generate new ID
  transactionsArray.push(newTransaction);
  res.status(201).json(newTransaction); // Return created transaction with ID
});

// DELETE
transactions.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = transactionsArray.findIndex(
    (transaction) => transaction.id === id
  );

  if (index !== -1) {
    const deletedTransaction = transactionsArray.splice(index, 1);
    res.status(200).json(deletedTransaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE
transactions.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTransaction = req.body;
  const index = transactionsArray.findIndex(
    (transaction) => transaction.id === id
  );

  if (index !== -1) {
    transactionsArray[index] = updatedTransaction;
    res.status(200).json(updatedTransaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = transactions;
