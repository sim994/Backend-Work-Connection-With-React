// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // allow frontend to talk

// simple API
app.get("/api/message", (req, res) => {
  res.json({ msg: "Hello from backend!" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
