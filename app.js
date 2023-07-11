// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors());

// ROUTES
const transactionsController = require("./controllers/TransactionController");
app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send("Welcome to a Financial Management App");
});

app.get("/transactions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const transaction = transactionsArray.find((transaction) => transaction.id === id);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ error: "Transaction not found" });
  }
});

// 404 PAGE
app.use((req, res, next) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;