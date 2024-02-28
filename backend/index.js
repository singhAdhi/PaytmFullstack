const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/api/v1", mainRouter); // all requests that is coming at /api/v1 should go to the mainRouter

app.listen(3000);
