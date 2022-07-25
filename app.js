const express = require("express");
const shopsRouter = require("./router/shops");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/shops", shopsRouter);

module.exports = app;
