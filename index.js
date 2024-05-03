const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);


app.get("/", function (req, res) {
  res.json("Hello, it is working");
});

app.listen(3000);

module.exports = app;
