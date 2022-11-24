const express = require("express");
const app = express();
const root = require("./useRoute")
app.use("/api", root)
app.use("/api/v", () => {
    res.send("hii i am api/v")
});
app.use("/api/v1", () => {
    res.send("hii i am api/v1")
});
module.exports = app;